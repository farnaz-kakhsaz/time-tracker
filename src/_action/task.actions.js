import { taskContants } from "../_constant/task.constants";

// List of action creatores
// 1.	Add Task
// 2.	Edit Task
// 3.	Done Task
// 4.	Undone Task
// 5. Delete Task
// 6. Update Time
// 7. Update Started Time
// 8. Update Finished Time

const addTask = (dispatch, title, description, toggleBtnValue) => {
  dispatch({
    type: taskContants.ADD_TASK,
    task: {
      id: new Date().getTime(),
      title: title,
      description: description,
      project: toggleBtnValue,
      createdTime: new Date().toLocaleString(),
      editedTime: "",
      done: false,
      time: 0,
      startedTime: 0,
      finishedTime: 0,
    },
  });
};

const editTask = (dispatch, task, title, description, project) => {
  const newTask = {
    ...task,
    title,
    description,
    project,
    editedTime: new Date().toLocaleString(),
  };

  dispatch({
    type: taskContants.EDIT_TASK,
    task: newTask,
  });
};

const doneTask = (dispatch, task) => (event) => {
  event.stopPropagation();
  updateFinishedTime(dispatch, task, new Date().toLocaleTimeString());
  dispatch({ type: taskContants.DONE_TASK, task });
};

const unDoneTask = (dispatch, task) => (event) => {
  event.stopPropagation();
  dispatch({ type: taskContants.UNDONE_TASK, task });
};

const deleteTask = (dispatch, task) => (event) => {
  event.stopPropagation();
  dispatch({ type: taskContants.DELETE_TASK, task });
};

const updateTime = (dispatch, task, time) => {
  const newTask = { ...task, time: time };
  dispatch({ type: taskContants.UPDATE_TIME, task: newTask });
};

const updateStartedTime = (dispatch, task, startedTime) => {
  const newTask = { ...task, startedTime: startedTime };
  dispatch({ type: taskContants.UPDATE_STARTED_TIME, task: newTask });
};

const updateFinishedTime = (dispatch, task, finishedTime) => {
  const newTask = { ...task, finishedTime: finishedTime };
  dispatch({ type: taskContants.UPDATE_FINISHED_TIME, task: newTask });
};

export {
  addTask,
  editTask,
  doneTask,
  unDoneTask,
  deleteTask,
  updateTime,
  updateStartedTime,
  updateFinishedTime,
};
