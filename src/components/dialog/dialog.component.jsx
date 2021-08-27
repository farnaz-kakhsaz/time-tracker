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
  editMood,
  openDialog,
  toggleBtnValue,
  switchChecked,
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

  const handleClickOpenDialogBtn = () => setOpenDialog(true);

  const handleCloseDialog = () =>
    input.title ? setShakeDialog(true) : handleClickCloseBtn();

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
      disabled={!input.title}
      addOrEditBtnTitle={editMood ? "Edit Task" : "Add Task"}
      handleClickCloseBtn={handleClickCloseBtn}
      handleClickAddOrEditTask={
        editMood ? handleEditTask : handleClickAddTaskBtn
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
  editMood: PropTypes.bool.isRequired,
  openDialog: PropTypes.bool.isRequired,
  toggleBtnValue: PropTypes.string.isRequired,
  switchChecked: PropTypes.bool.isRequired,
  setToggleBtnValue: PropTypes.func.isRequired,
  setSwitchChecked: PropTypes.func.isRequired,
  setOpenDialog: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
