import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  time: {
    fontSize: theme.typography.fontSize + 2,
    margin: theme.spacing(0, 2.25),
  },
}));
