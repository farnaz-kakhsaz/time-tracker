import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    margin: theme.spacing(0, 0.5),
  },
  time: {
    fontSize: theme.typography.fontSize + 2,
    marginLeft: theme.spacing(2.25),
  },
}));
