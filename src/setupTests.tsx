// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'jest-styled-components';

// Init i18n for the tests needing it
import 'locales/i18n';

jest.mock('react-router-dom', () => ({
  BrowserRouter: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
  Switch: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  Route: jest.fn().mockImplementation(({ children }) => <div>{children}</div>),
  MemoryRouter: jest
    .fn()
    .mockImplementation(({ children }) => <div>{children}</div>),
  Link: jest.fn().mockImplementation(({ to, children, ...rest }) => (
    <a href={to} {...rest}>
      {children}
    </a>
  )),
}));

jest.mock('react-router', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '{query: ""}',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
  useHistory: jest.fn().mockReturnValue({
    push: () => {},
  }),
}));

jest.mock('utils/httpClient', () => ({ httpClient: jest.fn() }));

jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      data: [],
    },
  }),
}));

jest.mock('services/jackpots/retrieveJackPots', () => ({
  retrieveJackPots: jest.fn(),
  useRetrieveJackPots: () => ({
    data: {
      data: [],
    },
  }),
}));
