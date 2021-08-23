import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
import ButtonBase from "../button-base/button-base";
// Styles
import { useStyles } from "./dialog-base.styles";
export default function DialogBase({
  children,
  titleValue,
  title,
  handleAddBtnClick,
  handleClearState,
  ...rest
}) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenAndCloseDialog = () => setOpenDialog(!openDialog);

  const handleDoneDialog = () => {
    setOpenDialog(false);
    handleAddBtnClick();
  };

  const handleCloseState = () => {
    setOpenDialog(false);
    handleAddBtnClick();
  };

  return (
    <>
      <Dialog
        fullWidth
        open={openDialog}
        onClose={handleOpenAndCloseDialog}
        {...rest}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions className={classes.dialogActions}>
          <ButtonBase onClick={handleCloseState}>Close</ButtonBase>
          <ButtonBase
            onClick={handleDoneDialog}
            disabled={!titleValue}
            color="secondary"
            variant="contained"
          >
            Add Task
          </ButtonBase>
        </DialogActions>
      </Dialog>
      <ButtonBase
        onClick={handleOpenAndCloseDialog}
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
  title: PropTypes.string.isRequired,
  handleAddBtnClick: PropTypes.func,
  handleClearState: PropTypes.func,
  rest: PropTypes.any,
};
