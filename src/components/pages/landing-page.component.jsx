// Components
import ContainerBase from "../items/container-base/container-base";
import TextField from "../items/text-field-base/text-field-base";
import ButtonBase from "../items/button-base/button-base";
import TypographyBase from "../items/typography-base/typography-base";
// Styles
import { useStyles } from "./landing-page.styles";

export default function LandingPage() {
  const classes = useStyles();
  return (
    <ContainerBase>
      <TypographyBase
        className={classes.typography}
        variant="h2"
        component="h1"
      >
        Time Tracher
      </TypographyBase>
      <div className={classes.textFieldAndBtnParent}>
        <TextField label="Enter Task Name" />
        <ButtonBase color="primary">submit</ButtonBase>
      </div>
    </ContainerBase>
  );
}
