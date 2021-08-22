import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

export default function TextFieldBase({ label, ...rest }) {
  return <TextField variant="outlined" label={label} {...rest} />;
}

TextFieldBase.propTypes = {
  label: PropTypes.string,
  rest: PropTypes.any,
};
