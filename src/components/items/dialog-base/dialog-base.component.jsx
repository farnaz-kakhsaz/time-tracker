import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";
// Components
import ButtonBase from "../button-base/button-base";
// Styles
import { useStyles } from "./dialog-base.styles";
export default function DialogBase({
  children,
  title,
  inputValue,
  handleAddBtnClick,
  handleSetDefaultState,
  ...rest
}) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [shakeDialog, setShakeDialog] = useState(false);

  const handleClickOpenDialogBtn = () => setOpenDialog(true);

  const handleCloseDialog = () =>
    inputValue.title ? setShakeDialog(true) : handleClickCloseBtn();

  const handleClickAddTaskBtn = () => {
    setOpenDialog(false);
    handleAddBtnClick();
  };

  const handleClickCloseBtn = () => {
    setOpenDialog(false);
    handleSetDefaultState();
  };

  const handleAnimationEnd = () => setShakeDialog(false);

  return (
    <>
      <Dialog
        classes={{ paper: clsx({ [classes.dialogPaper]: shakeDialog }) }}
        fullWidth
        open={openDialog}
        onClose={handleCloseDialog}
        onAnimationEnd={handleAnimationEnd}
        {...rest}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions className={classes.dialogActions}>
          <ButtonBase onClick={handleClickCloseBtn}>Close</ButtonBase>
          <ButtonBase
            onClick={handleClickAddTaskBtn}
            disabled={!inputValue.title}
            color="secondary"
            variant="contained"
          >
            Add Task
          </ButtonBase>
        </DialogActions>
      </Dialog>
      <ButtonBase
        onClick={handleClickOpenDialogBtn}
        variant="contained"
        color="primary"
      >
        Add Task
      </ButtonBase>
    </>
  );
}

DialogBase.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  inputValue: PropTypes.object.isRequired,
  handleAddBtnClick: PropTypes.func,
  handleSetDefaultState: PropTypes.func,
  rest: PropTypes.any,
};
