import {
  SuccessContainer,
  SuccessIcon,
  SuccessContent,
  SuccessHeading,
  SuccessMessage,
  CloseElement,
} from "./SuccessElement";

const Succes = ({ heading, message, close }) => {
  return (
    <SuccessContainer>
      <SuccessIcon></SuccessIcon>
      <SuccessContent>
        <SuccessHeading>{heading}</SuccessHeading>
        <SuccessMessage>{message}</SuccessMessage>
      </SuccessContent>
      <CloseElement href={close}></CloseElement>
    </SuccessContainer>
  );
};

export default Succes;
