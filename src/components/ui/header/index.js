import Button from "@/components/base/button";
import SearchBar from "@/components/base/searchBar";
import {
  HeaderWrapper,
  WelcomeText,
  ButtonWrapper,
  IconWrapper,
  IconElement,
} from "./HeaderElement";
import { FaEnvelope, FaBell, FaBars, FaSearch } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Header = ({ toggleSidebarState }) => {
  const { data: session } = useSession();

  if (session) {
    const { name } = session.user;
    return (
      <HeaderWrapper>
        <WelcomeText>Welcome, {name}</WelcomeText>
        <SearchBar />
        <ButtonWrapper>
          <Button btnText="View Survey" link="surveys" bg="primary" />
          <Button btnText="Plans/Pricing" link="plans" bg="secondary" />
        </ButtonWrapper>
        <IconWrapper>
          <IconElement bg="grey">
            <FaSearch />
          </IconElement>
          <IconElement bg="green">
            <FaEnvelope />
          </IconElement>
          <IconElement bg="red">
            <FaBell />
          </IconElement>
          <IconElement>
            <FaBars onClick={toggleSidebarState} />
          </IconElement>
        </IconWrapper>
      </HeaderWrapper>
    );
  }
};

export default Header;
