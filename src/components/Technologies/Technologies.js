import Frontskill from "./Front/FrontSkill";
import Backskill from "./Back/BackSkill";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { List } from "./TechnologiesStyles";

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
      <Frontskill />
      <Backskill />
    </List>
  </Section>
);

export default Technologies;
