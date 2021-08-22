import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";

export default function ContainerBase({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ContainerBase.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.any,
};
