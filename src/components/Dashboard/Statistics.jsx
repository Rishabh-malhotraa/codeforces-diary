// NO types 😭
import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Grid, ListItem } from "@material-ui/core";
import userLogo from "./../../assets/wolfram-alpha.svg";
import testLogo from "./../../assets/ribbon-logo.svg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "FAFAFA",
    mixBlendMode: "multiply",
    maxWidth: "30vw",
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
}));

export const Statistics = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <Grid container style={{ margin: "2rem 0 2rem 0" }} direction="row" justify="space-around">
      <Grid item>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            // image={"https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"}
            image={userLogo}
            extra={"Question Stats"}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              overline={"@rishgod"}
              body={
                "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs."
              }
            />
            <div>rishabh</div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            // image={"https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"}
            image={testLogo}
            extra={"Contest Stats"}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              overline={"@rishgod"}
              body={
                "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs."
              }
            />
            <div>rishabh</div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});

export default Statistics;
