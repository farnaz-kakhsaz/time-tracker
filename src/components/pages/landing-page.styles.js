import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  typography: {
    textAlign: "center",
  },
  textFieldAndBtnParent: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      height: 105,
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      width: 305,
      height: "100%",
      margin: "0 auto",
    },
    display: "flex",
    justifyContent: "space-between",
  },
}));
