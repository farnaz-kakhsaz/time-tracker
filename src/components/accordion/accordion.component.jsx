import { useState } from "react";
import PropTypes from "prop-types";
// Reducer
import { doneTask, unDoneTask, deleteTask } from "../../_action/task.actions";
// Components
import AccordionBase from "../items/accordion-base/accordion-base";
import BoxBase from "../items/box-base/box-base";
import Timer from "../timer/timer.component";
import IconButtonBase from "../items/icon-button-base/icon-button-base";
// Icon
import DoneIcon from "@material-ui/icons/Done";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
// Styles
import { useStyles } from "./accordion.styles";

export default function Accordion({
  dispatch,
  task,
  switchChecked,
  handleClickOpenDialogToEdit,
  handleSetDefaultState,
  ...rest
}) {
  const props = {
    backgroundColorSummary: task.done ? "#6fbf73" : "rgba(0, 0, 0, 0.03)",
    backgroundColorDetails: task.done ? "rgba(111, 191, 115, 0.3)" : "white",
    textDecoration: task.done ? "line-through" : "none",
  };
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState(true);

  const handleAccordionExpandChange = (id) => (event, newExpanded) =>
    setExpanded(newExpanded ? true : false);

  return (
    <AccordionBase
      id={task.id}
      task={task}
      expanded={expanded}
      classes={classes}
      classesAccordion={{
        root: classes.accordionRoot,
        expanded: classes.accordionExpanded,
      }}
      classesAccordionSummary={{
        root: classes.accordionSummaryRoot,
        content: classes.accordionSummaryContent,
        expanded: classes.accordionSummaryExpanded,
      }}
      ariaControls={task.title}
      handleAccordionExpandChange={handleAccordionExpandChange(task.id)}
      {...rest}
      accordionSummaryChildren={
        <>
          <div className={classes.title}>{task.title}</div>
          <div className={classes.timerParent}>
            {task.done && <BoxBase fontWeight="bold">Total Time:</BoxBase>}
            <Timer
              dispatch={dispatch}
              task={task}
              switchChecked={switchChecked}
              handleSetDefaultState={handleSetDefaultState}
            />
            {!task.done ? (
              <IconButtonBase
                className={classes.doneIcon}
                onClick={doneTask(dispatch, task)}
              >
                <DoneIcon />
              </IconButtonBase>
            ) : (
              <IconButtonBase
                color="secondary"
                onClick={unDoneTask(dispatch, task)}
              >
                <ClearIcon />
              </IconButtonBase>
            )}
            <IconButtonBase onClick={handleClickOpenDialogToEdit(task)}>
              <EditIcon />
            </IconButtonBase>
            <IconButtonBase onClick={deleteTask(dispatch, task)}>
              <Delete />
            </IconButtonBase>
          </div>
        </>
      }
      accordionDetailsChildren={
        <>
          <BoxBase
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt={2}
            color="text.secondary"
          >
            {task.editedTime ? (
              <div>Edited Time: {task.editedTime}</div>
            ) : (
              <div>Created Time: {task.createdTime}</div>
            )}
            <div>
              Project: <strong>{task.project}</strong>
            </div>
          </BoxBase>
          <BoxBase
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt={1}
            mb={2}
            color="text.secondary"
          >
            <div>
              Started Time: {task.startedTime !== 0 ? task.startedTime : "---"}
            </div>
            <div>
              Finished Time:
              {task.finishedTime !== 0 ? task.finishedTime : "---"}
            </div>
          </BoxBase>
          {task.description}
        </>
      }
    />
  );
}

Accordion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  switchChecked: PropTypes.bool.isRequired,
  handleClickOpenDialogToEdit: PropTypes.func.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
