import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  typography: {
    textAlign: "center",
    margin: theme.spacing(10, 0, 5),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
