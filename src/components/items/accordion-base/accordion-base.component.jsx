import { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
// Components
import BoxBase from "../box-base/box-base";
import Timer from "../../timer/timer.component";
import IconButtonBase from "../icon-button-base/icon-button-base";
// Icon
import Delete from "@material-ui/icons/Delete";
// Styles
import { useStyles } from "./accordion-base.styles";
export default function AccordionBase({
  task,
  index,
  switchChecked,
  handleUpdateTimeBtnClick,
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
      }}
      expanded={expanded === task.id}
      onChange={handleAccordionExpandChange(task.id)}
      square
    >
      <AccordionSummary
        classes={{
          root: classes.accordionSummaryRoot,
          content: classes.accordionSummaryContent,
          expanded: classes.accordionSummaryExpanded,
        }}
        aria-controls={task.title}
        id={task.id}
      >
        <div className={classes.title}>{task.title}</div>
        <div className={classes.timerParent}>
          <Timer
            task={task}
            switchChecked={switchChecked}
            handleUpdateTimeBtnClick={handleUpdateTimeBtnClick}
            handleSetDefaultState={handleSetDefaultState}
          />
          <IconButtonBase onClick={handleDeleteBtnClick(task)}>
            <Delete />
          </IconButtonBase>
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <BoxBase
          display="flex"
          justifyContent="space-between"
          width="100%"
          my={2}
          color="text.secondary"
        >
          <div>Created Time: {task.createdTime}</div>
          <div>Project: {task.project}</div>
        </BoxBase>
        {task.description}
      </AccordionDetails>
    </Accordion>
  );
}

AccordionBase.propTypes = {
  task: PropTypes.object.isRequired,
  handleUpdateTimeBtnClick: PropTypes.func.isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
