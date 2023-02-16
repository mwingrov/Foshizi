import {
  CheckboxContainer,
  FormCheckBox,
  FormLabel,
} from "./ChecboxButtonElement";

const CheckboxButton = ({ label }) => {
  return (
    <CheckboxContainer>
      <FormCheckBox type="checkbox" />
      <FormLabel>{label}</FormLabel>
    </CheckboxContainer>
  );
};

export default CheckboxButton;
