import { taskContants } from "../_constant/task.constants";

const initialState = {
  tasksList: JSON.parse(localStorage.getItem("tasksList")) || [],
  newTask: {
    id: "",
    title: "",
    description: "",
    project: "Personal",
    createdTime: "",
    editedTime: "",
    done: false,
    time: 0,
    startedTime: 0,
    finishedTime: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskContants.ADD_TASK:
      return { ...state, tasksList: [...state.tasksList, action.task] };
    case taskContants.EDIT_TASK:
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case taskContants.DONE_TASK:
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? { ...task, done: true } : task
        ),
      };
    case taskContants.UNDONE_TASK:
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? { ...task, done: false } : task
        ),
      };
    case taskContants.UPDATE_TIME:
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case taskContants.UPDATE_STARTED_TIME:
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case taskContants.UPDATE_FINISHED_TIME:
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case taskContants.DELETE_TASK:
      return {
        ...state,
        tasksList: state.tasksList.filter((task) => task.id !== action.task.id),
      };
    default:
      return state;
  }
};

export default reducer;
