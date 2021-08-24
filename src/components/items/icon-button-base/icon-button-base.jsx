import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

export default function IconButtonBase({ children, ariaLabel, ...rest }) {
  return (
    <IconButton aria-label={ariaLabel} {...rest}>
      {children}
    </IconButton>
  );
}

IconButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
  rest: PropTypes.any,
};
