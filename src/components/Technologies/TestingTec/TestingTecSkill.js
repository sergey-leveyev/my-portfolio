import {
  SiTestinglibrary,
  SiJest,
  SiWebdriverio,
  SiStorybook,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { BiTestTube } from "react-icons/bi";

import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
  SingleColumnBox,
} from "../TechnologiesStyles";

const TestingTecSkill = () => {
  return (
    <ListItem>
      <ListContainer>
        <TitelAndIcon>
          <BiTestTube size="3rem" />
          <ListTitle>Testing</ListTitle>
        </TitelAndIcon>
        <ListParagraph>Experience with</ListParagraph>

        <SingleColumnBox>
          <TextAndIcon>
            <SiJest style={{ margin: "5px" }} size="2rem" />
            Jest
          </TextAndIcon>
          <TextAndIcon>
            <SiTestinglibrary style={{ margin: "5px" }} size="2rem" />
            React-testing-library
          </TextAndIcon>
          <TextAndIcon>
            <SiWebdriverio style={{ margin: "5px" }} size="2rem" />
            WebdriverIo
          </TextAndIcon>
          <TextAndIcon>
            <SiStorybook style={{ margin: "5px" }} size="2rem" />
            storybook + loki
          </TextAndIcon>
        </SingleColumnBox>
      </ListContainer>
    </ListItem>
  );
};

export default TestingTecSkill;
