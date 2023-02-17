import {
  IconTextWrapper,
  ImageContainer,
  ImageElement,
  ContentWrapper,
  Title,
  Subtitle,
} from "./IconTextElement";

const IconText = ({ image, title, subtitle, size }) => {
  return (
    <IconTextWrapper>
      <ImageContainer big={size}>
        <ImageElement src={image} width={size} height={size} alt={title} />
      </ImageContainer>
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentWrapper>
    </IconTextWrapper>
  );
};

export default IconText;
