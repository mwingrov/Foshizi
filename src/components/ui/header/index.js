import Button from "@/components/base/button";
import SearchBar from "@/components/base/searchBar";
import {
  HeaderWrapper,
  WelcomeText,
  ButtonWrapper,
  IconWrapper,
  IconElement,
} from "./HeaderElement";
import { FaEnvelope, FaBell, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderWrapper>
      <WelcomeText>Welcome, Simon</WelcomeText>
      <SearchBar />
      <ButtonWrapper>
        <Button btnText="Create Survey" link="create-survey" bg="primary" />
        <Button btnText="Plans/Pricing" link="plans" bg="secondary" />
      </ButtonWrapper>
      <IconWrapper>
        <IconElement bg="green">
          <FaEnvelope />
        </IconElement>
        <IconElement bg="red">
          <FaBell />
        </IconElement>
        <IconElement>
          <FaBars />
        </IconElement>
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
