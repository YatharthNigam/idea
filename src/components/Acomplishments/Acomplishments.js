import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: '⭐ on CodeChef'},
  { number: 1026, text: 'Rating on Codeforces', },
  // { number: 2, text: 'Github Followers', },
  // { number: 0, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Pesonal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
