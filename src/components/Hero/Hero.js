import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Sergey Leveyv`s Portfolio
      </SectionTitle>
      <SectionText>Full stack Developer</SectionText>
      <Button onClick={() => (window.location = "AllProjects")}>
        All Projects
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
