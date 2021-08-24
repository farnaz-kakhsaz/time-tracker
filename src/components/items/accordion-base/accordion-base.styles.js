import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    "&:last-child": {
      borderRadius: theme.shape.borderRadius + 10,
    },
    "&:before": {
      display: "none",
    },
    "&$accorionExpanded": {
      margin: `${theme.spacing(2)}px auto`,
    },
    maxWidth: theme.spacing(70),
    margin: "auto",
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: theme.shape.borderRadius + 10,
    overflow: "hidden",
    boxShadow: "none",
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionSummaryExpanded: {},
  title: {
    fontSize: theme.typography.fontSize + 2,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    fontWeight: "bold",
  },
  timerParent: {
    display: "flex",
  },
  accordionDetails: {
    textAlign: "left",
  },
}));
