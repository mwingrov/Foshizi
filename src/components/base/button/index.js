import { ButtonBtn, LinkWrapper } from "./ButtonElement";

const Button = ({ size, btnText, link, bg }) => {
  return (
    <ButtonBtn size={size} bg={bg}>
      <LinkWrapper href={`/${link}`}>{btnText}</LinkWrapper>
    </ButtonBtn>
  );
};

export default Button;
