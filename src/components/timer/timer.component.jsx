import { useEffect } from "react";
import PropTypes from "prop-types";
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

export default function Timer({ switchChecked, handleSetDefaultState }) {
  const classes = useStyles();

  const [time, setTime, timerOn, setTimerOn] = useTime();
  const [minute, second, millisecond] = getTimeFormat(time);

  useEffect(() => {
    if (switchChecked) setTimerOn(true);
    handleSetDefaultState();
  }, []);

  const handleClickPlayBtn = (event) => {
    event.stopPropagation();
    setTimerOn(true);
  };
  const handleClickPauseBtn = (event) => {
    event.stopPropagation();
    setTimerOn(false);
  };
  const handleClickStopBtn = (event) => {
    event.stopPropagation();
    setTimerOn(false);
    setTime(0);
  };

  return (
    <div className={classes.root}>
      {timerOn ? (
        <>
          <IconButtonBase
            className={classes.iconButton}
            color="primary"
            ariaLabel="Pause"
            onClick={handleClickPauseBtn}
          >
            <PauseIcon />
          </IconButtonBase>
        </>
      ) : (
        <>
          <IconButtonBase
            className={classes.iconButton}
            color="secondary"
            ariaLabel="Play"
            onClick={handleClickPlayBtn}
          >
            <PlayArrowIcon />
          </IconButtonBase>
        </>
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
      <div className={classes.time}>
        {minute}:{second}:{millisecond}
      </div>
    </div>
  );
}

Timer.propTypes = {
  switchChecked: PropTypes.bool.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
};