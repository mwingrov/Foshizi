import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaApple,
  FaStripeS,
  FaMicrosoft,
  FaPenSquare,
} from "react-icons/fa";
import Card from "@/components/base/card";
import {
  LinkedAccountContainer,
  LinkNoteIcon,
  LinkedItem,
} from "./LinkedAccountElement";
import { IconElement } from "@/components/ui/header/HeaderElement";

const LinkedAccountCard = () => {
  return (
    <Card width="full" title="Linked Accounts">
      <LinkedAccountContainer>
        <LinkedItem>
          <IconElement size="md" bg="red">
            <FaEnvelope />
          </IconElement>
          <p>Google</p>
          <LinkNoteIcon>
            <FaPenSquare />
          </LinkNoteIcon>
        </LinkedItem>
        <LinkedItem>
          <IconElement size="md" bg="purple">
            <FaApple />
          </IconElement>
          <p>Apple</p>
          <LinkNoteIcon>
            <FaPenSquare />
          </LinkNoteIcon>
        </LinkedItem>
        <LinkedItem>
          <IconElement size="md" bg="blue">
            <FaFacebookF />
          </IconElement>
          <p>facebook</p>
          <LinkNoteIcon>
            <FaPenSquare />
          </LinkNoteIcon>
        </LinkedItem>
        <LinkedItem>
          <IconElement size="md" bg="#de821c">
            <FaStripeS />
          </IconElement>
          <p>Stripe</p>
          <LinkNoteIcon>
            <FaPenSquare />
          </LinkNoteIcon>
        </LinkedItem>
        <LinkedItem>
          <IconElement size="md" bg="pink">
            <FaLinkedinIn />
          </IconElement>
          <p>LinkedIn</p>
          <LinkNoteIcon>
            <FaPenSquare />
          </LinkNoteIcon>
        </LinkedItem>
        <LinkedItem>
          <IconElement size="md" bg="green">
            <FaMicrosoft />
          </IconElement>
          <p>Microsoft</p>
          <LinkNoteIcon>
            <FaPenSquare />
          </LinkNoteIcon>
        </LinkedItem>
      </LinkedAccountContainer>
    </Card>
  );
};

export default LinkedAccountCard;
