import { DiNodejsSmall } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";

import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
  SingleColumnBox,
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
        <SingleColumnBox>
          <TextAndIcon>
            <DiNodejsSmall style={{ margin: "5px" }} size="2.5rem" />
            Node.js
          </TextAndIcon>
          <TextAndIcon>
            <SiDotnet style={{ margin: "5px" }} size="2.5rem" />
            .Net Core
          </TextAndIcon>
        </SingleColumnBox>
      </ListContainer>
    </ListItem>
  );
};

export default Backskill;
