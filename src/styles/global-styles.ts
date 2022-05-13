import { createGlobalStyle } from 'styled-components';
import { COLORS } from 'styles/global-colors';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .container {
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
  }
  .cell-20 {
    flex: 0 0 auto;
    width: 20%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .cell-60 {
    flex: 0 0 auto;
    width: 60%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .cell-40 {
    flex: 0 0 auto;
    width: 40%;
    padding-left: 8px;
    padding-right: 8px;
  }

  .m-aligner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .m-aligner-left {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .m-aligner-right {
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .game-item {
    margin-bottom: 30px;
  }

  .pt-60 {
    padding-top: 60px;
  }

  .main-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 8px;
  }

  .main-menu li.menu-item {
    display: inline-block;
  }

  .main-menu li.menu-item .menu-itm-link {
    color: ${COLORS.white};
    cursor: pointer;
    text-decoration: none;
    display: flex;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
  }
  .main-menu li.menu-item .menu-itm-link.active {
    background: linear-gradient(266.53deg, ${COLORS.seaSerpent} 0%, ${COLORS.accentGreen} 100%);
    border-radius: 8px;
    text-shadow: 1px 1px 2px rgba(0,0,0, 0.3);
  }
  .main-menu li.menu-item a.menu-itm-link&:hover {
    color: ${COLORS.accentGreen};
  }
  .main-menu li.menu-item .menu-itm-link.active&:hover {
    color: ${COLORS.white};
  }
  .header-mobile {
    padding: 0 16px;
    width: 100vw;
    visibility: hidden;
    height: 0;
  }

  // RESPONSIVE 
  @media (max-width: 1024px) {
    .cell-20 {
      width: 25%;
    }
  }

  @media (max-width: 969px) {
    .cell-20 {
      width: 33.33333%;
    }
  }

  

  // RESPONSIVE 
  @media (max-width: 1024px) {
    .cell-20 {
      width: 25%;
    }
  }
  @media (max-width: 969px) {
    .cell-20 {
      width: 33.33333%;
    }
  }
  @media (max-width: 890px) {
    .main-menu.large-screen {
      position: absolute;
      left: 0;
      right: 0;
      padding: 16px;
      background: ${COLORS.grey2};
    }
    .main-menu.large-screen.open {
      top: 64px;
    }
    .main-menu.large-screen.close {
      top: -500px;
    }

    .main-menu li.menu-item {
      display: block;
    }

    .main-menu li.menu-item .menu-itm-link.active {
      display: inline-block;
    }
    .header-mobile {
      visibility: visible;
    }
  }
  
  @media (max-width: 648px) {
    .cell-20 {
      width: 50%;
    }
  }
`;
