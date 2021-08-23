import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import PropTypes from "prop-types";
// Styles
import { useStyles } from "./toggle-button-base.styles";

export default function ToggleButtonBase({
  toggleValueList,
  value,
  handleToggleOnChange,
}) {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
      classes={{
        root: classes.toggleButtonGroupRoot,
        grouped: classes.toggleButtonGroupGrouped,
      }}
      value={value}
      exclusive
      onChange={handleToggleOnChange}
    >
      {toggleValueList.map((item, index) => (
        <ToggleButton
          classes={{
            root: classes.toggleButtonRoot,
            selected: classes.toggleButtonSelected,
          }}
          value={item}
          aria-label={item}
          key={index}
        >
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

ToggleButtonBase.propTypes = {
  toggleValueList: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleToggleOnChange: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
