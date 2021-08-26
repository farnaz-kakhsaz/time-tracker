import { useEffect, useState, useReducer } from "react";
// Components
import ContainerBase from "../items/container-base/container-base";
import TextFieldBase from "../items/text-field-base/text-field-base";
import TypographyBase from "../items/typography-base/typography-base";
import Dialog from "../dialog/dialog.component";
import BoxBase from "../items/box-base/box-base";
import ToggleButtonBase from "../items/toggle-button-base/toggle-button-base.component";
import SwitchBase from "../items/switch-base/switch-base";
import Accordion from "../accordion/accordion.component";
// Helper
import { useInputChange } from "../../helper/useInputChange";
// Styles
import { useStyles } from "./landing-page.styles";

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

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasksList: [...state.tasksList, action.task] };
    case "DONE_TASK":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? { ...task, done: true } : task
        ),
      };
    case "UNDONE_TASK":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? { ...task, done: false } : task
        ),
      };
    case "UPDATE_TIME":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case "UPDATE_STARTED_TIME":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case "UPDATE_FINISHED_TIME":
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasksList: state.tasksList.filter((task) => task.id !== action.task.id),
      };
    default:
      return state;
  }
};

export default function LandingPage() {
  const classes = useStyles();
  const INITIAL_INPUT_STATE = { title: "", description: "" };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggleBtnValue, setToggleBtnValue] = useState("Personal");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMood, setEditMood] = useState(false);

  const [input, setInput, handleInputChange] = useInputChange({
    ...INITIAL_INPUT_STATE,
  });

  useEffect(
    () => localStorage.setItem("tasksList", JSON.stringify(state.tasksList)),
    [state.tasksList]
  );

  const handleAddTask = (title, description, toggleBtnValue) => (event) => {
    dispatch({
      type: "ADD_TASK",
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

  const handleClickDoneBtn = (task) => (event) => {
    event.stopPropagation();
    handleUpdateFinishedTime(task, new Date().toLocaleTimeString());
    dispatch({ type: "DONE_TASK", task });
  };

  const handleClickUnDoneBtn = (task) => (event) => {
    event.stopPropagation();
    dispatch({ type: "UNDONE_TASK", task });
  };

  const handleClickDeleteBtn = (task) => (event) => {
    event.stopPropagation();
    dispatch({ type: "DELETE_TASK", task });
  };

  const handleUpdateTime = (task, time) => {
    const newTask = { ...task, time: time };
    dispatch({ type: "UPDATE_TIME", task: newTask });
  };

  const handleUpdateStartedTime = (task, startedTime) => {
    const newTask = { ...task, startedTime: startedTime };
    dispatch({ type: "UPDATE_STARTED_TIME", task: newTask });
  };

  const handleUpdateFinishedTime = (task, finishedTime) => {
    const newTask = { ...task, finishedTime: finishedTime };
    dispatch({ type: "UPDATE_FINISHED_TIME", task: newTask });
  };

  const handleSetDefaultState = () => {
    setToggleBtnValue("Personal");
    setInput({ ...INITIAL_INPUT_STATE });
    setSwitchChecked(false);
  };

  const handleToggleOnChange = (event, newValue) =>
    newValue !== null && setToggleBtnValue(newValue);

  const handleSwitchChange = (event) => setSwitchChecked(event.target.checked);

  return (
    <ContainerBase maxWidth="xl">
      <BoxBase textAlign="center">
        <TypographyBase
          className={classes.typography}
          variant="h2"
          component="h1"
        >
          Time Tracker
        </TypographyBase>

        <Dialog
          inputValue={input}
          editMood={editMood}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          handleAddTask={handleAddTask(
            input.title,
            input.description,
            toggleBtnValue
          )}
          handleSetDefaultState={handleSetDefaultState}
        >
          <BoxBase
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            fontWeight="bold"
            fontSize="16px"
            mb={2}
          >
            <div className={classes.startTimerParent}>
              Start Timer:
              <SwitchBase
                handleSwitchChange={handleSwitchChange}
                switchChecked={switchChecked}
              />
            </div>
            <div className={classes.projectParent}>
              Project:
              <ToggleButtonBase
                toggleValueList={["Personal", "Work"]}
                value={toggleBtnValue}
                handleToggleOnChange={handleToggleOnChange}
              />
            </div>
          </BoxBase>
          <div className={classes.inputParent}>
            <TextFieldBase
              value={input.title}
              onChange={handleInputChange}
              label="Title"
              name="title"
            />
            <TextFieldBase
              value={input.description}
              onChange={handleInputChange}
              label="Description"
              name="description"
              multiline
              rows={4}
            />
          </div>
        </Dialog>
        <BoxBase
          mt={5}
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {state.tasksList?.map((task, index) => (
            <Accordion
              key={index}
              task={task}
              switchChecked={switchChecked}
              handleClickDoneBtn={handleClickDoneBtn}
              handleClickUnDoneBtn={handleClickUnDoneBtn}
              handleUpdateTime={handleUpdateTime}
              handleUpdateStartedTime={handleUpdateStartedTime}
              handleClickDeleteBtn={handleClickDeleteBtn}
              handleSetDefaultState={handleSetDefaultState}
            />
          ))}
        </BoxBase>
      </BoxBase>
    </ContainerBase>
  );
}
