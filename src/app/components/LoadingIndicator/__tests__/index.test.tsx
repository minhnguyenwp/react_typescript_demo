import * as React from 'react';
import { render } from '@testing-library/react';

import { LoadingIndicator } from '../index';
import { themes } from 'styles/theme/themes';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const renderWithTheme = (
  props: Parameters<typeof LoadingIndicator>[number] = {},
  theme?: DefaultTheme,
) =>
  render(
    <ThemeProvider theme={theme || themes.light}>
      <LoadingIndicator {...props} />
    </ThemeProvider>,
  );

describe('<LoadingIndicator />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = renderWithTheme();
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when props changed', () => {
    const loadingIndicator = renderWithTheme({ small: true });
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  // you can only test the styles dedined inside styled components, not outside as props
  // check here: https://github.com/testing-library/jest-dom/issues/295
  // and here: https://github.com/testing-library/jest-dom/issues/113#issuecomment-496971128
  // it('should have theme', () => {
  //   const loadingIndicator = renderWithTheme();
  //   expect(loadingIndicator.container.querySelector('circle')).toHaveStyle(
  //     `stroke: ${themes.light.primary}`,
  //   );
  // });
});
