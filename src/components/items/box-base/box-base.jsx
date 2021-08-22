import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

export default function BoxBase({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
}

BoxBase.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.any,
};
