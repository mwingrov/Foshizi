import Card from "@/components/base/card";
import { BioContent } from "./BioElement";

const BioCard = ({ width }) => {
  return (
    <Card width={width} title="Bio">
      <BioContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </BioContent>
    </Card>
  );
};

export default BioCard;
