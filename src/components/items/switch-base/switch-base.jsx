import Switch from "@material-ui/core/Switch";
import PropTypes from "prop-types";

export default function SwitchBase({
  switchChecked,
  handleSwitchChange,
  ...rest
}) {
  return (
    <Switch checked={switchChecked} onChange={handleSwitchChange} {...rest} />
  );
}

SwitchBase.propTypes = {
  switchChecked: PropTypes.bool.isRequired,
  handleSwitchChange: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
