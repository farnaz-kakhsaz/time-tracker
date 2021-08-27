import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Components
import DialogBase from "../items/dialog-base/dialog-base";
import TextFieldBase from "../items/text-field-base/text-field-base";
import ToggleButtonBase from "../items/toggle-button-base/toggle-button-base.component";
import SwitchBase from "../items/switch-base/switch-base";
import BoxBase from "../items/box-base/box-base";
// Styles
import { useStyles } from "./dialog.styles";

export default function Dialog({
  input,
  editMoodState,
  openDialog,
  toggleBtnValue,
  switchChecked,
  setEditMoodState,
  setToggleBtnValue,
  setSwitchChecked,
  setOpenDialog,
  handleInputChange,
  handleAddTask,
  handleEditTask,
  handleSetDefaultState,
  ...rest
}) {
  const classes = useStyles();
  const [shakeDialog, setShakeDialog] = useState(false);

  const handleToggleOnChange = (event, newValue) =>
    newValue !== null && setToggleBtnValue(newValue);

  const handleSwitchChange = (event) => setSwitchChecked(event.target.checked);

  const handleClickOpenDialogBtn = () => {
    setOpenDialog(true);
    if (Object.keys(editMoodState).length) setEditMoodState({});
  };

  const handleCloseDialog = () =>
    input.title ? setShakeDialog(true) : handleClickCloseBtn();

  const handleClickAddTaskBtn = () => {
    setOpenDialog(false);
    handleAddTask();
  };

  const handleClickEditTaskBtn = () => {
    setOpenDialog(false);
    handleEditTask(
      editMoodState,
      input.title,
      input.description,
      toggleBtnValue
    );
    handleSetDefaultState();
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
      dialogTilte={Object.keys(editMoodState).length ? "Edit Task" : "Add Task"}
      classes={classes}
      classesDialog={{ paper: clsx({ [classes.dialogPaper]: shakeDialog }) }}
      disabled={!input.title}
      addOrEditBtnTitle={
        Object.keys(editMoodState).length ? "Edit Task" : "Add Task"
      }
      handleClickCloseBtn={handleClickCloseBtn}
      handleClickAddOrEditTask={
        Object.keys(editMoodState).length
          ? handleClickEditTaskBtn
          : handleClickAddTaskBtn
      }
      handleClickOpenDialogBtn={handleClickOpenDialogBtn}
      {...rest}
    >
      <BoxBase
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="bold"
        fontSize="16px"
        mb={2}
      >
        <div className={classes.startTimerParent}>
          Start Timer:
          <SwitchBase
            handleSwitchChange={handleSwitchChange}
            switchChecked={switchChecked}
          />
        </div>
        <div className={classes.projectParent}>
          Project:
          <ToggleButtonBase
            toggleValueList={["Personal", "Work"]}
            value={toggleBtnValue}
            handleToggleOnChange={handleToggleOnChange}
          />
        </div>
      </BoxBase>
      <div className={classes.inputParent}>
        <TextFieldBase
          value={input.title}
          onChange={handleInputChange}
          label="Title"
          name="title"
        />
        <TextFieldBase
          value={input.description}
          onChange={handleInputChange}
          label="Description"
          name="description"
          multiline
          rows={4}
        />
      </div>
    </DialogBase>
  );
}

Dialog.propTypes = {
  input: PropTypes.object.isRequired,
  editMoodState: PropTypes.object.isRequired,
  openDialog: PropTypes.bool.isRequired,
  toggleBtnValue: PropTypes.string.isRequired,
  switchChecked: PropTypes.bool.isRequired,
  setEditMoodState: PropTypes.func.isRequired,
  setToggleBtnValue: PropTypes.func.isRequired,
  setSwitchChecked: PropTypes.func.isRequired,
  setOpenDialog: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
