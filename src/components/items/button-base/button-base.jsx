import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export default function ButtonBase({ children, color, ...rest }) {
  return (
    <Button variant="contained" color={color} {...rest}>
      {children}
    </Button>
  );
}

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  rest: PropTypes.any,
};
