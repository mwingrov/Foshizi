import { FormInputGroup, FormInput, FormLabel } from "./InputElement";


const Input = ({label ,type, onChange}) => {

  return (
      <FormInputGroup>
        <FormLabel>{label}</FormLabel>
        <FormInput type={type} onChange={onChange}></FormInput>      
      </FormInputGroup>
  );
};

export default Input;
