import { FormInputGroup, FormInput, FormLabel } from "./InputElement";

const Input = ({ label, type }) => {
  return (
    <FormInputGroup>
      <FormLabel>{label}</FormLabel>
      <FormInput type={type}></FormInput>
    </FormInputGroup>
  );
};

export default Input;
