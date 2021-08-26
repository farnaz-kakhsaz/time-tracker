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
import DoneIcon from "@material-ui/icons/Done";
import Delete from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
// Styles
import { useStyles } from "./accordion-base.styles";
export default function AccordionBase({
  task,
  index,
  switchChecked,
  handleUpdateTime,
  handleDoneBtnClick,
  handleUnDoneBtnClick,
  handleDeleteBtnClick,
  handleSetDefaultState,
  ...rest
}) {
  const props = {
    backgroundColorSummary: task.done ? "#6fbf73" : "rgba(0, 0, 0, 0.03)",
    backgroundColorDetails: task.done ? "rgba(111, 191, 115, 0.3)" : "white",
    textDecoration: task.done ? "line-through" : "none",
  };
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState();

  const handleAccordionExpandChange = (id) => (event, newExpanded) =>
    setExpanded(newExpanded ? id : false);

  return (
    <Accordion
      classes={{
        root: classes.accordionRoot,
        expanded: classes.accordionExpanded,
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
          {task.done && <BoxBase fontWeight="bold">Total Time:</BoxBase>}
          <Timer
            task={task}
            switchChecked={switchChecked}
            handleUpdateTime={handleUpdateTime}
            handleSetDefaultState={handleSetDefaultState}
          />
          {!task.done ? (
            <IconButtonBase
              className={classes.doneIcon}
              onClick={handleDoneBtnClick(task)}
            >
              <DoneIcon />
            </IconButtonBase>
          ) : (
            <IconButtonBase
              color="secondary"
              onClick={handleUnDoneBtnClick(task)}
            >
              <ClearIcon />
            </IconButtonBase>
          )}
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
  handleUpdateTime: PropTypes.func.isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
  handleDoneBtnClick: PropTypes.func.isRequired,
  handleUnDoneBtnClick: PropTypes.func.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
