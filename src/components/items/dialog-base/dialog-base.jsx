import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
import ButtonBase from "../button-base/button-base";

export default function DialogBase({
  children,
  titleValue,
  title,
  handleAddBtnClick,
  ...rest
}) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenAndCloseDialog = () => setOpenDialog(!openDialog);

  const handleDoneDialog = () => {
    setOpenDialog(false);
    handleAddBtnClick();
  };

  return (
    <>
      <Dialog open={openDialog} onClose={handleOpenAndCloseDialog} {...rest}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <ButtonBase onClick={handleDoneDialog} disabled={!titleValue}>
            Done
          </ButtonBase>
        </DialogActions>
      </Dialog>
      <ButtonBase onClick={handleOpenAndCloseDialog} color="primary">
        Add Task
      </ButtonBase>
    </>
  );
}

DialogBase.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  handleAddBtnClick: PropTypes.func,
  rest: PropTypes.any,
};
