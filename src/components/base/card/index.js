import ComingSoonBadge from "../comingSoon";
import {
  CardHeading,
  CardWrapper,
  CardContainer,
  CardHeadingWrapper,
} from "./cardElement";

const Card = (props) => {
  const { width, title, isAccountCard, comingSoon } = props;
  return (
    <CardWrapper width={width}>
      <CardHeadingWrapper>
        <CardHeading>{title}</CardHeading>
        {comingSoon && <ComingSoonBadge />}
      </CardHeadingWrapper>
      <CardContainer isAccountCard={isAccountCard}>
        {props.children}
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
