import { ButtonBtn, LinkWrapper, TextButton } from "./ButtonElement";

const Button = ({ size, btnText, link, bg, disabled, onClick, isBtn }) => {
  return (
    <ButtonBtn
      onClick={onClick}
      disabled={disabled}
      type="submit"
      size={size}
      bg={bg}
    >
      {!isBtn ? (
        <LinkWrapper href={link ? link : "/"}>{btnText}</LinkWrapper>
      ) : (
        <TextButton>{btnText}</TextButton>
      )}
    </ButtonBtn>
  );
};

export default Button;
