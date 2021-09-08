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
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        NIE Mysore Grad who loves solving problems, creating beautiful Web Apps and learning something new everyday.
      </SectionText>
      <Button onClick={()=>window.location="www.google.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
