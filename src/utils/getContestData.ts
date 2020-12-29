import contestListWrapper from "../response/user_rating";

const contestList = contestListWrapper.result;

const getContestData = () => {
  let maxRatingChange = 0;
  let minRatingChange = 0;
  let bestRank = Infinity;
  let worstRank = 0;

  contestList.forEach((contest) => {
    maxRatingChange = Math.max(
      maxRatingChange,
      contest.newRating - contest.oldRating
    );
    minRatingChange = Math.min(
      minRatingChange,
      contest.newRating - contest.oldRating
    );
    bestRank = Math.min(bestRank, contest.rank);
    worstRank = Math.max(worstRank, contest.rank);
  });

  return {
    "Contest Given": contestList.length,
    "Best Rank": bestRank,
    "Worst Rank": worstRank,
    "Best Gain in Rating": maxRatingChange,
    "Worst Gain in Rating": minRatingChange,
  };
};
export default getContestData;