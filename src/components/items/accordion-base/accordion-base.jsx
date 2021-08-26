import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

export default function AccordionBase({
  id,
  accordionSummaryChildren,
  accordionDetailsChildren,
  expanded,
  ariaControls,
  classes,
  classesAccordion,
  classesAccordionSummary,
  handleAccordionExpandChange,
  ...rest
}) {
  return (
    <Accordion
      classes={classesAccordion}
      expanded={expanded}
      onChange={handleAccordionExpandChange}
      square
      {...rest}
    >
      <AccordionSummary
        classes={classesAccordionSummary}
        aria-controls={ariaControls}
        id={id}
      >
        {accordionSummaryChildren}
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {accordionDetailsChildren}
      </AccordionDetails>
    </Accordion>
  );
}

AccordionBase.propTypes = {
  id: PropTypes.number.isRequired,
  accordionSummaryChildren: PropTypes.node.isRequired,
  accordionDetailsChildren: PropTypes.node.isRequired,
  expanded: PropTypes.bool.isRequired,
  ariaControls: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  classesAccordion: PropTypes.object.isRequired,
  classesAccordionSummary: PropTypes.object.isRequired,
  handleAccordionExpandChange: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
