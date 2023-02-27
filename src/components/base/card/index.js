import { CardHeading, CardWrapper, CardContainer } from "./cardElement";

const Card = (props) => {
  const { width, title, isAccountCard } = props;
  return (
    <CardWrapper width={width}>
      <CardHeading>{title}</CardHeading>
      <CardContainer isAccountCard={isAccountCard}>
        {props.children}
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
