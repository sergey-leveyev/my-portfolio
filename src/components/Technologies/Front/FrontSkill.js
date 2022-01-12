import {
  DiReact,
  DiCss3Full,
  DiHtml5,
  DiMaterializecss,
  DiJavascript1,
  DiSass
} from "react-icons/di";

import {SiRedux} from "react-icons/si"

import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TextAndIcon,
  TitelAndIcon,
  List2,
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
          <List2>
            <div>
              <TextAndIcon>
                <DiHtml5 style={{ margin: "5px" }} size="2rem" />
                HTML
              </TextAndIcon>
              <TextAndIcon>
                <DiMaterializecss style={{ margin: "5px" }} size="2rem" />
                CSS
              </TextAndIcon>
              <TextAndIcon>
                <DiSass style={{ margin: "5px" }} size="2rem" />
                SASS/SCSS
              </TextAndIcon>
            </div>

            <div>
              <TextAndIcon>
                <DiJavascript1 style={{ margin: "5px" }} size="2rem" />
                Javascript
              </TextAndIcon>
              <TextAndIcon>
                <DiReact style={{ margin: "5px" }} size="2.1rem" />
                ReactJS
              </TextAndIcon>
              <TextAndIcon>
                <SiRedux style={{ margin: "5px" }} size="1.85rem" />
                Redux
              </TextAndIcon>
            </div>
          </List2>
        </ListParagraph>
      </ListContainer>
    </ListItem>
  );
};

export default Frontskill;
