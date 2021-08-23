import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toggleButtonGroupRoot: { border: "1px solid rgba(0, 0, 0, 0.23)" },
  toggleButtonGroupGrouped: {
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
    margin: theme.spacing(0.5),
    border: "none",
  },
  toggleButtonRoot: {},
  toggleButtonSelected: {
    backgroundColor: `${theme.palette.primary.main}!important`,
    color: `${theme.palette.common.white}!important`,
  },
}));
