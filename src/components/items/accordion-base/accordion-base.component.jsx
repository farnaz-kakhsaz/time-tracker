import { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
// Components
import Timer from "../../timer/timer.component";
import IconButtonBase from "../icon-button-base/icon-button-base";
// Icon
import Delete from "@material-ui/icons/Delete";
// Styles
import { useStyles } from "./accordion-base.styles";
export default function AccordionBase({
  item,
  index,
  switchChecked,
  handleDeleteBtnClick,
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
        <div className={classes.title}>{item.title}</div>
        <div className={classes.timerParent}>
          <Timer
            id={item.id}
            switchChecked={switchChecked}
            handleSetDefaultState={handleSetDefaultState}
          />
          <IconButtonBase onClick={handleDeleteBtnClick(item)}>
            <Delete />
          </IconButtonBase>
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {item.description}
      </AccordionDetails>
    </Accordion>
  );
}

AccordionBase.propTypes = {
  item: PropTypes.object.isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
