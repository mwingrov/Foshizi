import { ButtonBtn, LinkWrapper } from "./ButtonElement";
import Link from "next/link";

const Button = ({ size, btnText, link, bg, disabled, onClick }) => {

  return (
      <ButtonBtn onClick={onClick} to="/dashboard" disabled={disabled} type="submit" size={size} bg={bg}>
        {btnText}
      </ButtonBtn>
    );
};

export default Button;
