import {
  DiDatabase,
  DiReact,
  DiCss3Full,
  DiHtml5,
  DiMaterializecss,
  DiJavascript1,
  DiNodejsSmall,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a Technologies in the web development world. From
      Back-end To FrontEnd
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <TitelAndIcon>
            <DiCss3Full size="3rem" />
            <ListTitle>Front End</ListTitle>
          </TitelAndIcon>
          <ListParagraph>
            Experience with
            <TextAndIcon>
              <DiHtml5 style={{ margin: "5px" }} size="2rem" />
              HTML
            </TextAndIcon>
            <TextAndIcon>
              <DiMaterializecss style={{ margin: "5px" }} size="2rem" />
              CSS
            </TextAndIcon>
            <TextAndIcon>
              <DiJavascript1 style={{ margin: "5px" }} size="2rem" />
              Javascript
            </TextAndIcon>
          </ListParagraph>
        </ListContainer>
      </ListItem>

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
              <DiNodejsSmall style={{ margin: "5px" }} size="2.5rem" />
              Node.js
            </TextAndIcon>
            <TextAndIcon>
              <DiNodejsSmall style={{ margin: "5px" }} size="2.5rem" />
              Node.js
            </TextAndIcon>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
