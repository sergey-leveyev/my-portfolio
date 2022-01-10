import { DiDatabase, DiNodejsSmall, DiDotnet } from "react-icons/di";
import { BiData } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";

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
          <DiDatabase size="3rem" />
          <ListTitle>Back End</ListTitle>
        </TitelAndIcon>

        <ListParagraph>
          Experience with
          <TextAndIcon>
            <DiNodejsSmall style={{ margin: "5px" }} size="2.5rem" />
            Node.js
          </TextAndIcon>
          <TextAndIcon>
            <SiDotnet style={{ margin: "5px" }} size="2.5rem" />
            .Net & entity
          </TextAndIcon>
          <TextAndIcon>
            <BiData style={{ margin: "5px" }} size="2.5rem" />
            MongoDB
          </TextAndIcon>
        </ListParagraph>
      </ListContainer>
    </ListItem>
  );
};

export default Backskill;
