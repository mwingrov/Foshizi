import Link from "next/link";
import { ButtonBtn } from "./ButtonElement";

const Button = ({ btnText, link }) => {
  return (
    <ButtonBtn>
      <Link href={`/${link}`}>{btnText}</Link>
    </ButtonBtn>
  );
};

export default Button;
