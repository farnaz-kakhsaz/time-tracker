import { useState, useReducer } from "react";
// Components
import ContainerBase from "../items/container-base/container-base";
import TextFieldBase from "../items/text-field-base/text-field-base";
import TypographyBase from "../items/typography-base/typography-base";
import DialogBase from "../items/dialog-base/dialog-base.component";
import BoxBase from "../items/box-base/box-base";
import ToggleButtonBase from "../items/toggle-button-base/toggle-button-base.component";

import { useInputChange } from "../../helper/useInputChange";
// Styles
import { useStyles } from "./landing-page.styles";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasksList: [...state.tasksList, action.task] };
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

  const [{ tasksList }, dispatch] = useReducer(reducer, { tasksList: [] });
  const [toggleBtnValue, setToggleBtnValue] = useState("Personal");
  const [input, setInput, handleInputChange] = useInputChange({
    ...INITIAL_INPUT_STATE,
  });

  const handleAddBtnClick = (title, description, toggleBtnValue) => (event) => {
    if (title) {
      dispatch({
        type: "ADD_TASK",
        task: {
          id: new Date().getTime(),
          title: title,
          description: description,
          project: toggleBtnValue,
        },
      });
    }
    handleSetDefaultState();
  };

  const handleSetDefaultState = () => {
    setToggleBtnValue("Personal");
    setInput({ ...INITIAL_INPUT_STATE });
  };

  const handleDeleteBtnClick = (task) => (event) =>
    dispatch({ type: "DELETE_TASK", task: task });

  const handleToggleOnChange = (event, newValue) =>
    newValue !== null && setToggleBtnValue(newValue);

  return (
    <ContainerBase>
      <BoxBase textAlign="center">
        <TypographyBase
          className={classes.typography}
          variant="h2"
          component="h1"
        >
          Time Tracher
        </TypographyBase>
        <DialogBase
          title="Add Task"
          handleAddBtnClick={handleAddBtnClick(
            input.title,
            input.description,
            toggleBtnValue
          )}
          handleSetDefaultState={handleSetDefaultState}
          titleValue={input.title}
          className={classes.dialog}
        >
          <BoxBase fontWeight="bold" mb={2} textAlign="right">
            {/* Project: */}
            <ToggleButtonBase
              toggleValueList={["Personal", "Work"]}
              value={toggleBtnValue}
              handleToggleOnChange={handleToggleOnChange}
            />
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
            />
          </div>
        </DialogBase>
        {tasksList?.map((item, index) => (
          <div key={index} onClick={handleDeleteBtnClick(item)}>
            {item.id}
            {item.title}
            {item.description}
            {item.project}
          </div>
        ))}
      </BoxBase>
    </ContainerBase>
  );
}
