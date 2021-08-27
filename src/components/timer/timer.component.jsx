import { useEffect } from "react";
import PropTypes from "prop-types";
// Reducer
import {
  updateTime,
  updateStartedTime,
  updateFinishedTime,
} from "../../_action/task.actions";
// Components
import IconButtonBase from "../items/icon-button-base/icon-button-base";
// Icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
// Helper
import { useTime } from "../../helper/useTime";
import { getTimeFormat } from "../../helper/getTimeFormat";
// Styles
import { useStyles } from "./timer.styles";

export default function Timer({
  dispatch,
  task,
  switchChecked,
  handleSetDefaultState,
}) {
  const classes = useStyles();
  const [time, setTime, timerOn, setTimerOn] = useTime(task.time || 0);
  const [minute, second, millisecond] = getTimeFormat(time);

  useEffect(() => {
    if (switchChecked) {
      setTimerOn(true);
      updateStartedTime(dispatch, task, new Date().toLocaleTimeString());
    }
    handleSetDefaultState();
  }, []);

  useEffect(() => setTime(task.time), [task]);

  useEffect(() => {
    if (task.done) {
      updateTime(dispatch, task, time);
      setTimerOn(false);
    }
    if (!task.done) updateFinishedTime(dispatch, task, 0);
  }, [task.done]);

  useEffect(() => {
    // When timer started (on first time) update startedTime in state
    if (time === 0 && timerOn)
      updateStartedTime(dispatch, task, new Date().toLocaleTimeString());
    // When clicked stop button clear startedTime in state
    if (!task.done && time === 0 && !timerOn)
      updateStartedTime(dispatch, task, 0);
  }, [time, timerOn]);

  const handleClickPlayBtn = (event) => {
    event.stopPropagation();
    setTimerOn(true);
  };
  const handleClickPauseBtn = (event) => {
    event.stopPropagation();
    updateTime(dispatch, task, time);
    setTimerOn(false);
  };
  const handleClickStopBtn = (event) => {
    event.stopPropagation();
    updateTime(dispatch, task, 0);
    setTimerOn(false);
    setTime(0);
  };

  return (
    <div className={classes.root}>
      {!task.done && (
        <>
          {timerOn ? (
            <IconButtonBase
              className={classes.iconButton}
              color="primary"
              ariaLabel="Pause"
              onClick={handleClickPauseBtn}
            >
              <PauseIcon />
            </IconButtonBase>
          ) : (
            <IconButtonBase
              className={classes.iconButton}
              color="secondary"
              ariaLabel="Play"
              onClick={handleClickPlayBtn}
            >
              <PlayArrowIcon />
            </IconButtonBase>
          )}
          {time ? (
            <IconButtonBase
              className={classes.iconButton}
              ariaLabel="Stop"
              onClick={handleClickStopBtn}
            >
              <StopIcon />
            </IconButtonBase>
          ) : (
            ""
          )}
        </>
      )}
      <div className={classes.time}>
        {minute}:{second}:{millisecond}
      </div>
    </div>
  );
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  switchChecked: PropTypes.bool.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
};
