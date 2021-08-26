import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  accordionRoot: {
    "&$accordionExpanded": {
      "&:first-child": {
        margin: theme.spacing(2, 0),
      },
      margin: theme.spacing(2, 0),
    },
    "&:last-child": {
      borderRadius: theme.shape.borderRadius + 10,
    },
    maxWidth: theme.spacing(73),
    width: "100%",
    height: "100%",
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: theme.shape.borderRadius + 10,
    overflow: "hidden",
    boxShadow: "none",
    margin: theme.spacing(2, 0),
  },
  accordionExpanded: {},
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
    fontSize: theme.typography.fontSize + 3,
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
    alignItems: "center",
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
