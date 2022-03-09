import { DiDatabase, DiNodejsSmall, DiDotnet } from "react-icons/di";
import { BiData } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { GiServerRack } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";

import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
} from "../TechnologiesStyles";

const Backskill = () => {
  return (
    <ListItem>
      <ListContainer>
        <TitelAndIcon>
          <AiOutlineCloudServer style={{ marginRight: "5px" }} size="3rem" />
          <ListTitle>Back End</ListTitle>
        </TitelAndIcon>

        <ListParagraph>Experience with</ListParagraph>
        <TextAndIcon>
          <DiNodejsSmall style={{ margin: "5px" }} size="2.5rem" />
          Node.js
        </TextAndIcon>
        <TextAndIcon>
          <SiDotnet style={{ margin: "5px" }} size="2.5rem" />
          .Net Core
        </TextAndIcon>
      </ListContainer>
    </ListItem>
  );
};

export default Backskill;
