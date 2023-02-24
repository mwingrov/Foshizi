import { FormInputGroup, FormInput, FormLabel } from "./InputElement";

<<<<<<< HEAD

const Input = ({label ,type, onChange}) => {

  return (
      <FormInputGroup>
        <FormLabel>{label}</FormLabel>
        <FormInput type={type} onChange={onChange}></FormInput>      
      </FormInputGroup>
=======
const Input = ({ label, type }) => {
  return (
    <FormInputGroup>
      <FormLabel>{label}</FormLabel>
      <FormInput type={type}></FormInput>
    </FormInputGroup>
>>>>>>> main
  );
};

export default Input;
