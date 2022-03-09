import { DiDatabase } from "react-icons/di";
import { SiMongodb, SiFirebase } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
  List2,
} from "../TechnologiesStyles";

const Databases = () => {
  return (
    <ListItem>
      <ListContainer>
        <TitelAndIcon>
          <DiDatabase size="3rem" />
          <ListTitle>Databases</ListTitle>
        </TitelAndIcon>
        <ListParagraph>Experience with</ListParagraph>
        <List2>
          <div>
            <TextAndIcon>
              <SiMongodb style={{ margin: "5px" }} size="2rem" />
              MongoDB
            </TextAndIcon>
            <TextAndIcon>
              <SiFirebase style={{ margin: "5px" }} size="2rem" />
              Firebase
            </TextAndIcon>
            <TextAndIcon>
              <VscAzure style={{ margin: "5px" }} size="2rem" />
              Azure
            </TextAndIcon>
          </div>
        </List2>
      </ListContainer>
    </ListItem>
  );
};

export default Databases;
