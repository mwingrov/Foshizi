import Card from "@/components/base/card";
import { ChatContainer, ChatSender } from "./ChatElement";
import {
  ImageContainer,
  ImageElement,
} from "@/components/base/iconText/IconTextElement";
import profileImage from "../../../../assets/images/profile.png";

const ChatCard = () => {
  return (
    <Card width="half" title="Chat">
      <ChatContainer>
        <ChatSender>
          <ImageContainer>
            <ImageElement
              src={profileImage}
              width=""
              height=""
              alt="sender-icon"
            />
          </ImageContainer>
        </ChatSender>
      </ChatContainer>
    </Card>
  );
};

export default ChatCard;
