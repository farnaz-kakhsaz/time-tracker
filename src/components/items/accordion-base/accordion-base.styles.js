import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$accorionExpanded": {
      margin: "auto",
    },
  },
  accorionExpanded: {},
  accordionSummaryRoot: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$accordionSummaryExpanded": {
      minHeight: 56,
    },
  },
  accordionSummaryContent: {
    "&$accordionSummaryExpanded": {
      margin: "12px 0",
    },
  },
  accordionSummaryExpanded: {},
  accordionDetails: {
    textAlign: "left",
  },
}));
