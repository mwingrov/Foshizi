import { LogoContainer, ImageEl } from "./LogoElement";
import ImageLogo from "../../../../assets/images/FoshiziLogo.png";

const Logo = ({ dashboard = false, size }) => {
  return (
    <LogoContainer dashboard={dashboard}>
      <ImageEl src={ImageLogo} alt="logo-image" />
    </LogoContainer>
  );
};

export default Logo;
