import { DiDatabase } from "react-icons/di";
import { SiMongodb, SiFirebase, SiMicrosoftsqlserver } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
  SingleColumnBox,
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

        <SingleColumnBox>
          <TextAndIcon>
            <SiMongodb style={{ margin: "5px" }} size="2rem" />
            MongoDB
          </TextAndIcon>
          <TextAndIcon>
            <SiFirebase style={{ margin: "5px" }} size="2rem" />
            Firebase
          </TextAndIcon>
          {/* <TextAndIcon>
            <SiMicrosoftsqlserver style={{ margin: "5px" }} size="2rem" />
            SQL Server
          </TextAndIcon> */}
        </SingleColumnBox>
      </ListContainer>
    </ListItem>
  );
};

export default Databases;
