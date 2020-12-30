import React from "react";
import { Typography, Paper } from "@material-ui/core";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import getDate from "utils/getDate";
import Select from "react-select";
import dateFormat from "dateformat";
import Dialog from "./Dialog";
import { SubmissionType, yearListType, QuestionMapDateType } from "types";
import { useSelector } from "react-redux";
import { selectSubmissionList } from "reducers/slices/FetchedDataSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": {
        background: "#fafafa",
        boxShadow: "20px 20px 60px #d5d5d5,-20px -20px 60px #ffffff",
      },
    },
    containerForm: {
      display: "flex",
      justifyContent: "space-between",
    },
    containerHeatmap: {
      margin: "auto",
      padding: "1rem 3rem 1rem 3rem",
    },
    dropdown: {
      width: "12vw",
      padding: "8px",
    },
  })
);

/**
 * SubmissionList - is the list of submissions
 * QuestionMap-{} - is an object sorted by some paramater(duplictes handling) eg date and has {date: , quest6ions: ,}
 * yearList - is the list of years to be put in to the select component
 */
/**
 * Takes the resposne (all submissions) and returns a hashmap for all the
 *  submission sorted by dates
 */
const prepareData = (SubmissionList: SubmissionType[]) => {
  const LastSubmissionYear = getDate(SubmissionList[0].creationTimeSeconds).getFullYear();
  const FirstSubmissionYear = getDate(
    SubmissionList[SubmissionList.length - 1].creationTimeSeconds
  ).getFullYear();

  let yearList: yearListType[] = [];
  for (let idx = FirstSubmissionYear; idx <= LastSubmissionYear; idx++)
    yearList.push({ value: idx, label: idx.toString() });

  //  date sorted Question List

  let QuestionMap: Record<string, QuestionMapDateType> = {};
  SubmissionList.forEach((attempt: SubmissionType) => {
    const date = getDate(attempt.creationTimeSeconds);
    // yyyy-mm-dd format
    const dateKey = date.toISOString().slice(0, 10);
    if (!QuestionMap[dateKey]) {
      QuestionMap[dateKey] = {
        date: date,
        questions: [attempt],
      };
    } else {
      QuestionMap[dateKey].questions.push(attempt);
    }
  });
  return { QuestionMap, yearList };
};

/**
 * The given function filters out the data from the hashmap and returns
 *  an array of all the submission sorted by date for the given year
 *
 * @param QuestionMap Hash Mop containing all question with key as dates
 * @param year current year to filter the data to be fed into the heatmap
 */
const filterData = (QuestionMap: Record<string, QuestionMapDateType>, year: number) => {
  const QuestionListYear: QuestionMapDateType[] = [];

  for (const [, value] of Object.entries(QuestionMap)) {
    const { date } = value;
    if (date.getFullYear() === year) QuestionListYear.push(value);
  }

  return QuestionListYear;
};

/**
 * Helper function to take care of starting and ending dates for the heatmap component
 * @param year The year to for which you need to return the first and last dates
 */
const getYearDate = (year: number): Record<string, Date> => {
  // year is 0 indexed
  const dateObject = {
    startDate: new Date(year, 0, 0),
    endDate: new Date(year, 11, 31),
  };
  return dateObject;
};

const Heatmap: React.FC<{ drawerOpen: boolean }> = ({ drawerOpen }) => {
  const classes = useStyles();
  const SubmissionList = useSelector(selectSubmissionList);
  const { QuestionMap, yearList } = prepareData(SubmissionList);
  const [year, setYear] = React.useState(yearList[yearList.length - 1].value);
  const [open, setOpen] = React.useState(false);
  const QuestionListYear = filterData(QuestionMap, year);
  const [dialogQuestionList, setDialogQuestionList] = React.useState<QuestionMapDateType>(
    QuestionListYear[QuestionListYear.length - 1]
  );

  // ReactTooltip.rebuild() after you fetch the data to rebind the tooltips!
  React.useEffect(() => {
    ReactTooltip.rebuild();
  }, [year, drawerOpen]);

  // getting the start and end date for the selected year
  const Dates = getYearDate(year);

  let numberOfSubmissions = 0;
  QuestionListYear.forEach(({ questions }) => {
    numberOfSubmissions += questions.length;
  });

  return (
    <>
      <Paper className={classes.root}>
        <div className={classes.containerForm}>
          <Typography variant="h6" style={{ padding: "8px" }}>
            Number of Submissions in {year} : {numberOfSubmissions}
          </Typography>
          <Select
            className={classes.dropdown}
            options={yearList}
            defaultValue={yearList[yearList.length - 1]}
            onChange={(options) => setYear(options!.value)}
          ></Select>
        </div>
        <div className={classes.containerHeatmap}>
          <CalendarHeatmap
            startDate={Dates.startDate}
            endDate={Dates.endDate}
            values={QuestionListYear}
            classForValue={(value: QuestionMapDateType) => {
              if (!value) {
                return "color-empty";
              }
              const count = Math.min(4, Math.ceil(value.questions.length / 4));
              return `color-github-${count}`;
            }}
            tooltipDataAttrs={(value: QuestionMapDateType) => {
              if (value && value?.date && value?.questions) {
                return {
                  "data-tip": `
                  ${value.questions.length} Submissions on
                  ${dateFormat(value.date, " mmm dS, yyyy")}`,
                };
              } else return {};
            }}
            onClick={(value: QuestionMapDateType) => {
              if (value && value.questions) {
                setOpen(true);
                setDialogQuestionList(value);
              }
            }}
          />
          <ReactTooltip />
        </div>
      </Paper>
      <Dialog open={open} setOpen={setOpen} dialogData={dialogQuestionList} />
    </>
  );
};

export default Heatmap;
