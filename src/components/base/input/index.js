import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormInput, FormInputGroup, FormLabel } from "./InputElement";


const Input = ({label ,type, onChange, value}) => {

  return (
      <FormInputGroup>
        <FormLabel>{label}</FormLabel>
        <FormInput value={value} type={type} onChange={onChange}></FormInput>    
      </FormInputGroup>
  );
};

export default Input;
