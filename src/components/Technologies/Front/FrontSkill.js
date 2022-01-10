import {
  DiReact,
  DiCss3Full,
  DiHtml5,
  DiMaterializecss,
  DiJavascript1,
} from "react-icons/di";

import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
} from "../TechnologiesStyles";

const Frontskill = () => {
  return (
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
  );
};

export default Frontskill;
