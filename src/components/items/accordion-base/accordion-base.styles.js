import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    "&:last-child": {
      borderRadius: theme.shape.borderRadius + 10,
    },
    "&:before": {
      display: "none",
    },
    maxWidth: theme.spacing(70),
    width: "100%",
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: theme.shape.borderRadius + 10,
    overflow: "hidden",
    boxShadow: "none",
  },
  accordionSummaryRoot: {
    backgroundColor: (props) => props.backgroundColorSummary,
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
    textDecoration: (props) => props.textDecoration,
    maxWidth: theme.spacing(25),
  },
  timerParent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  doneIcon: {
    "&:hover": {
      backgroundColor: "rgba(53, 122, 56, 0.04)",
    },
    color: theme.palette.tertiary.main,
  },
  accordionDetails: {
    textAlign: "left",
    flexDirection: "column",
    backgroundColor: (props) => props.backgroundColorDetails,
  },
}));
