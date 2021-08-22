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

  const handleOpenDialog = () => setOpenDialog(true);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    handleAddBtnClick();
  };

  return (
    <>
      <Dialog open={openDialog} {...rest}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <ButtonBase onClick={handleCloseDialog} disabled={!titleValue}>
            Done
          </ButtonBase>
        </DialogActions>
      </Dialog>
      <ButtonBase onClick={handleOpenDialog} color="primary">
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
