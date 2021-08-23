import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export default function ButtonBase({ children, variant, color, ...rest }) {
  return (
    <Button variant={variant} color={color} {...rest}>
      {children}
    </Button>
  );
}

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  rest: PropTypes.any,
};
