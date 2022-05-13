import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { Link } from '../index';
import { themes } from 'styles/theme/themes';
import { MemoryRouter } from 'react-router-dom';

const renderer = createRenderer();

describe('<Link />', () => {
  renderer.render(
    <MemoryRouter>
      <Link to="/test" theme={themes.light}>
        HeaderLink
      </Link>
    </MemoryRouter>,
  );
  const renderedOutput = renderer.getRenderOutput();
  it('should match snapshot', () => {
    expect(renderedOutput).toMatchSnapshot();
  });
});
