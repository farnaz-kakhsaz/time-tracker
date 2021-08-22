import { useReducer } from "react";
// Components
import ContainerBase from "../items/container-base/container-base";
import TextFieldBase from "../items/text-field-base/text-field-base";
import TypographyBase from "../items/typography-base/typography-base";
import DialogBase from "../items/dialog-base/dialog-base";
import BoxBase from "../items/box-base/box-base";

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
  const INITIAL_STATE = { title: "", description: "" };

  const [{ tasksList }, dispatch] = useReducer(reducer, { tasksList: [] });
  const [input, setInput, handleInputChange] = useInputChange({
    ...INITIAL_STATE,
  });

  const handleAddBtnClick = (title, description) => (event) => {
    if (title) {
      dispatch({
        type: "ADD_TASK",
        task: {
          id: new Date().getTime(),
          title: title,
          description: description,
        },
      });
    }
    setInput({ ...INITIAL_STATE });
  };

  const handleDeleteBtnClick = (task) => (event) =>
    dispatch({ type: "DELETE_TASK", task: task });

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
          handleAddBtnClick={handleAddBtnClick(input.title, input.description)}
          titleValue={input.title}
          className={classes.dialog}
        >
          <BoxBase display="flex" flexDirection="column">
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
          </BoxBase>
        </DialogBase>
        {tasksList?.map((item, index) => (
          <div key={index} onClick={handleDeleteBtnClick(item)}>
            {item.id}
            {item.title}
            {item.description}
          </div>
        ))}
      </BoxBase>
    </ContainerBase>
  );
}
