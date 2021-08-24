import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
// Components
import Timer from "../../timer/timer.component";
// Styles
import { useStyles } from "./accordion-base.styles";
export default function AccordionBase({
  item,
  index,
  switchChecked,
  handleSetDefaultState,
  ...rest
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState();

  const handleAccordionExpandChange = (id) => (event, newExpanded) =>
    setExpanded(newExpanded ? id : false);

  return (
    <Accordion
      classes={{
        root: classes.accordionRoot,
        expanded: classes.accorionExpanded,
      }}
      expanded={expanded === item.id}
      onChange={handleAccordionExpandChange(item.id)}
      square
    >
      <AccordionSummary
        classes={{
          root: classes.accordionSummaryRoot,
          content: classes.accordionSummaryContent,
          expanded: classes.accordionSummaryExpanded,
        }}
        aria-controls={item.title}
        id={item.id}
      >
        <Timer
          switchChecked={switchChecked}
          handleSetDefaultState={handleSetDefaultState}
        />
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {item.description}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nam
        quam dolores atque dicta praesentium accusamus voluptatem accusantium?
        Odio mollitia quis odit porro quo modi necessitatibus deserunt doloribus
        officia sequi?
      </AccordionDetails>
    </Accordion>
  );
}

AccordionBase.propTypes = {
  item: PropTypes.object.isRequired,
  rest: PropTypes.any,
};
