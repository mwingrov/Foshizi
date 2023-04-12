import {
  FailureContainer,
  FailureIcon,
  FailureContent,
  FailureHeading,
  FailureMessage,
  CloseElement,
} from "./FailureElement";

const Failure = ({ heading, message, close }) => {
  return (
    <FailureContainer>
      <FailureIcon></FailureIcon>
      <FailureContent>
        <FailureHeading>{heading}</FailureHeading>
        <FailureMessage>{message}</FailureMessage>
      </FailureContent>
      <CloseElement href={close}>Close</CloseElement>
    </FailureContainer>
  );
};

export default Failure;
