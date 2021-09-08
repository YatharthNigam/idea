import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br />
        I'm Yatharth Nigam
      </SectionTitle>
      <SectionText>
        I am an NIE Mysore Grad who loves solving problems, creating beautiful
        Web Apps, and learning something new every day.
      </SectionText>
      <Button onClick={() => (window.location = "www.google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
