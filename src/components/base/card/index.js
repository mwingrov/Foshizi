import { CardHeading, CardWrapper, CardContainer } from "./cardElement";

const Card = (props) => {
  const { width, title } = props;
  return (
    <CardWrapper width={width}>
      <CardHeading>{title}</CardHeading>
      <CardContainer>{props.children}</CardContainer>
    </CardWrapper>
  );
};

export default Card;
