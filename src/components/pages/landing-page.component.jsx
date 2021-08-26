import { useEffect, useState, useReducer } from "react";
// Components
import ContainerBase from "../items/container-base/container-base";
import TextFieldBase from "../items/text-field-base/text-field-base";
import TypographyBase from "../items/typography-base/typography-base";
import DialogBase from "../items/dialog-base/dialog-base.component";
import BoxBase from "../items/box-base/box-base";
import ToggleButtonBase from "../items/toggle-button-base/toggle-button-base.component";
import SwitchBase from "../items/switch-base/switch-base";
import AccordionBase from "../items/accordion-base/accordion-base.component";
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
    time: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasksList: [...state.tasksList, action.task] };
    case "UPDATE_TIME":
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

  const [input, setInput, handleInputChange] = useInputChange({
    ...INITIAL_INPUT_STATE,
  });

  useEffect(
    () => localStorage.setItem("tasksList", JSON.stringify(state.tasksList)),
    [state.tasksList]
  );

  const handleAddBtnClick = (title, description, toggleBtnValue) => (event) => {
    dispatch({
      type: "ADD_TASK",
      task: {
        id: new Date().getTime(),
        title: title,
        description: description,
        project: toggleBtnValue,
        createdTime: new Date().toLocaleString(),
        time: 0,
      },
    });
  };

  const handleDeleteBtnClick = (task) => (event) =>
    dispatch({ type: "DELETE_TASK", task: task });

  const handleUpdateTimeBtnClick = (task, time) => {
    const newTask = { ...task, time };
    dispatch({ type: "UPDATE_TIME", task: newTask });
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
    <ContainerBase>
      <BoxBase textAlign="center">
        <TypographyBase
          className={classes.typography}
          variant="h2"
          component="h1"
        >
          Time Tracker
        </TypographyBase>

        <DialogBase
          title="Add Task"
          handleAddBtnClick={handleAddBtnClick(
            input.title,
            input.description,
            toggleBtnValue
          )}
          handleSetDefaultState={handleSetDefaultState}
          inputValue={input}
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
        </DialogBase>
        <BoxBase
          mt={5}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {state.tasksList?.map((task, index) => (
            <AccordionBase
              task={task}
              switchChecked={switchChecked}
              key={index}
              handleUpdateTimeBtnClick={handleUpdateTimeBtnClick}
              handleSetDefaultState={handleSetDefaultState}
              handleDeleteBtnClick={handleDeleteBtnClick}
            />
          ))}
        </BoxBase>
      </BoxBase>
    </ContainerBase>
  );
}
