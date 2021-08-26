import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Components
import DialogBase from "../items/dialog-base/dialog-base";
// Styles
import { useStyles } from "./dialog.styles";

export default function Dialog({
  children,
  inputValue,
  editMood,
  openDialog,
  setOpenDialog,
  handleAddTask,
  handleEditTask,
  handleSetDefaultState,
  ...rest
}) {
  const classes = useStyles();
  const [shakeDialog, setShakeDialog] = useState(false);

  const handleClickOpenDialogBtn = () => setOpenDialog(true);

  const handleCloseDialog = () =>
    inputValue.title ? setShakeDialog(true) : handleClickCloseBtn();

  const handleClickAddTaskBtn = () => {
    setOpenDialog(false);
    handleAddTask();
  };

  const handleClickCloseBtn = () => {
    setOpenDialog(false);
    handleSetDefaultState();
  };

  const handleAnimationEnd = () => setShakeDialog(false);

  return (
    <DialogBase
      open={openDialog}
      onClose={handleCloseDialog}
      onAnimationEnd={handleAnimationEnd}
      dialogTilte={editMood ? "Edit Task" : "Add Task"}
      classes={classes}
      classesDialog={{ paper: clsx({ [classes.dialogPaper]: shakeDialog }) }}
      disabled={!inputValue.title}
      addOrEditBtnTitle={editMood ? "Edit Task" : "Add Task"}
      handleClickCloseBtn={handleClickCloseBtn}
      handleClickAddOrEditTask={
        editMood ? handleEditTask : handleClickAddTaskBtn
      }
      handleClickOpenDialogBtn={handleClickOpenDialogBtn}
      {...rest}
    >
      {children}
    </DialogBase>
  );
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  inputValue: PropTypes.object.isRequired,
  editMood: PropTypes.bool.isRequired,
  openDialog: PropTypes.bool.isRequired,
  setOpenDialog: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
