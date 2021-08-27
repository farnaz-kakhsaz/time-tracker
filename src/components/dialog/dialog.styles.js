import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "@keyframes shake": {
    "0%": {
      transform: "translate(1px, 1px) rotate(0deg)",
    },
    "10%": {
      transform: "translate(-1px, -2px) rotate(-1deg)",
    },
    "20%": {
      transform: "translate(-3px, 0px) rotate(1deg)",
    },
    "30%": {
      transform: "translate(3px, 2px) rotate(0deg)",
    },
    "40%": {
      transform: "translate(1px, -1px) rotate(1deg)",
    },
    "50%": {
      transform: "translate(-1px, 2px) rotate(-1deg)",
    },
    "60%": {
      transform: "translate(-3px, 1px) rotate(0deg)",
    },
    "70%": {
      transform: "translate(3px, 1px) rotate(-1deg)",
    },
    "80%": {
      transform: "translate(-1px, -1px) rotate(1deg)",
    },
    "90%": {
      transform: "translate(1px, 2px) rotate(0deg)",
    },
    "100%": {
      transform: "translate(1px, -2px) rotate(-1deg)",
    },
  },
  dialogPaper: {
    animation: "$shake 0.5s",
  },
  dialogActions: {
    margin: theme.spacing(2),
  },
  startTimerParent: {
    "& > :last-child": {
      marginLeft: theme.spacing(0.5),
    },
  },
  projectParent: {
    "& > :last-child": {
      marginLeft: theme.spacing(2),
    },
  },
  inputParent: {
    "& > :first-child": {
      margin: theme.spacing(0, 0, 2, 0),
    },
    display: "flex",
    flexDirection: "column",
  },
}));
