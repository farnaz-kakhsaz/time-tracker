import { useEffect } from "react";
import PropTypes from "prop-types";
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
    <>
      {timerOn ? (
        <>
          <PauseIcon onClick={handleClickPauseBtn} />
        </>
      ) : (
        <>
          <PlayArrowIcon onClick={handleClickPlayBtn} />
        </>
      )}
      {time ? <StopIcon onClick={handleClickStopBtn} /> : ""}
      {minute}:{second}:{millisecond}
    </>
  );
}

Timer.propTypes = {
  switchChecked: PropTypes.bool.isRequired,
  handleSetDefaultState: PropTypes.func.isRequired,
};
