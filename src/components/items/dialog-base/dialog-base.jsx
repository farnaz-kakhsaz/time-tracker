import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import PropTypes from "prop-types";
// Components
import ButtonBase from "../button-base/button-base";

export default function DialogBase({
  children,
  classesDialog,
  open,
  onClose,
  onAnimationEnd,
  dialogTilte,
  disabled,
  addOrEditBtnTitle,
  classNameDialogActions,
  handleClickCloseBtn,
  handleClickOpenDialogBtn,
  handleClickAddOrEditTask,
  ...rest
}) {
  return (
    <>
      <Dialog
        classes={classesDialog}
        open={open}
        onClose={onClose}
        onAnimationEnd={onAnimationEnd}
        fullWidth
        {...rest}
      >
        <DialogTitle>{dialogTilte}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions className={classNameDialogActions}>
          <ButtonBase onClick={handleClickCloseBtn}>Close</ButtonBase>
          <ButtonBase
            onClick={handleClickAddOrEditTask}
            disabled={disabled}
            color="secondary"
            variant="contained"
          >
            {addOrEditBtnTitle}
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
  open: PropTypes.bool.isRequired,
  dialogTilte: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  addOrEditBtnTitle: PropTypes.string.isRequired,
  classesDialog: PropTypes.object.isRequired,
  classNameDialogActions: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
  handleClickCloseBtn: PropTypes.func.isRequired,
  handleClickOpenDialogBtn: PropTypes.func.isRequired,
  handleClickAddOrEditTask: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
