import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Nav } from '../Nav';

const renderer = createRenderer();

describe('<Nav />', () => {
  renderer.render(<Nav />);
  const renderedOutput = renderer.getRenderOutput();
  it('should match the snapshot', () => {
    expect(renderedOutput).toMatchSnapshot();
  });
});
