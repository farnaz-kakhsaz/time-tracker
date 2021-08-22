import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

export default function TypographyBase({ children, ...rest }) {
  return <Typography {...rest}>{children}</Typography>;
}

TypographyBase.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.any,
};
