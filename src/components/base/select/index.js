import { FormSelectGroup, FormSelect, FormOption } from "./SelectElement";
import { FormLabel } from "../input/InputElement";

const Select = ({ label, options }) => {
  return (
    <FormSelectGroup>
      <FormLabel>{label}</FormLabel>
      <FormSelect>
        {options.map((option, index) => (
          <FormOption key={index}>{option}</FormOption>
        ))}
      </FormSelect>
    </FormSelectGroup>
  );
};

export default Select;
