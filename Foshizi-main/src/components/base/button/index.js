import { ButtonBtn, LinkWrapper } from "./ButtonElement";

const Button = ({ size, btnText, link, bg, disabled, onClick }) => {
  return (
    <ButtonBtn
      onClick={onClick}
      disabled={disabled}
      type="submit"
      size={size}
      bg={bg}
    >
      <LinkWrapper href={link ? link : "/"}>{btnText}</LinkWrapper>
    </ButtonBtn>
  );
};

export default Button;
