import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  typography: {
    textAlign: "center",
    margin: theme.spacing(10, 0, 5),
  },
  inputParent: {
    "& > :first-child": {
      margin: theme.spacing(0, 0, 2, 0),
    },
    display: "flex",
    flexDirection: "column",
  },
}));
