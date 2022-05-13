import React from 'react';
import { render } from '@testing-library/react';
import { createRenderer } from 'react-test-renderer/shallow';

import { CurrentJackpot } from '../CurrentJackpot';

const renderer = createRenderer();

describe('CardGame', () => {
  it('Should render the correct snapshot', () => {
    expect(render(<CurrentJackpot gameId="Test" />)).toMatchSnapshot();
  });

  it('Should render shallow snapshot', () => {
    renderer.render(<CurrentJackpot gameId="Test" />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
