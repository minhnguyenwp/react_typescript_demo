import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { StyleConstants } from 'styles/StyleConstants';
import { COLORS } from 'styles/global-colors';

// Components
import { Nav } from './Nav';
import { PageWrapper } from '../PageWrapper';

export const NavBar: React.FC = memo(() => {
  return (
    <Wrapper>
      <div className="header-inner">
        <PageWrapper className="hhead m-aligner-left">
          <Nav />
        </PageWrapper>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.header`
  height: ${StyleConstants.NAV_BAR_HEIGHT};

  .header-inner {
    height: ${StyleConstants.NAV_BAR_HEIGHT};
    display: flex;
    background: linear-gradient(
      269.9deg,
      ${COLORS.grey3} 0%,
      ${COLORS.grey} 100%
    );
    z-index: 5;
    position: fixed;
    left: 0;
    right: 0;
  }
`;
