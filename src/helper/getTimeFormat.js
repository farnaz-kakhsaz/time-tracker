export const getTimeFormat = (time) => {
  let minute = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
  let second = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
  let millisecond = ("0" + ((time / 10) % 100)).slice(-2);

  return [minute, second, millisecond];
};
