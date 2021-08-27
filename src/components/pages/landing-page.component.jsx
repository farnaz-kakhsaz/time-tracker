import { useEffect, useState, useReducer } from "react";
import reducer from "../../_reducer/task.reducer";
// Components
import ContainerBase from "../items/container-base/container-base";
import TypographyBase from "../items/typography-base/typography-base";
import Dialog from "../dialog/dialog.component";
import BoxBase from "../items/box-base/box-base";
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
export default function LandingPage() {
  const classes = useStyles();
  const INITIAL_INPUT_STATE = { title: "", description: "" };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [toggleBtnValue, setToggleBtnValue] = useState("Personal");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMoodState, setEditMoodState] = useState({});
  const [input, setInput, handleInputChange] = useInputChange({
    ...INITIAL_INPUT_STATE,
  });

  useEffect(
    () => localStorage.setItem("tasksList", JSON.stringify(state.tasksList)),
    [state.tasksList]
  );

  const handleClickOpenDialogToEdit = (task) => (event) => {
    event.stopPropagation();
    setToggleBtnValue(task.project);
    setInput({
      title: task.title,
      description: task.description,
    });
    setEditMoodState(task);
    setOpenDialog(true);
  };

  const handleSetDefaultState = () => {
    setToggleBtnValue("Personal");
    setInput({ ...INITIAL_INPUT_STATE });
    setSwitchChecked(false);
    setOpenDialog(false);
    setEditMoodState({});
  };

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
          dispatch={dispatch}
          input={input}
          editMoodState={editMoodState}
          openDialog={openDialog}
          toggleBtnValue={toggleBtnValue}
          setToggleBtnValue={setToggleBtnValue}
          switchChecked={switchChecked}
          setEditMoodState={setEditMoodState}
          setSwitchChecked={setSwitchChecked}
          setOpenDialog={setOpenDialog}
          handleInputChange={handleInputChange}
          handleSetDefaultState={handleSetDefaultState}
        />
        <BoxBase
          mt={5}
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {state.tasksList?.map((task, index) => (
            <Accordion
              dispatch={dispatch}
              key={index}
              task={task}
              switchChecked={switchChecked}
              handleClickOpenDialogToEdit={handleClickOpenDialogToEdit}
              handleSetDefaultState={handleSetDefaultState}
            />
          ))}
        </BoxBase>
      </BoxBase>
    </ContainerBase>
  );
}
