import { Global, css } from '@emotion/react';
import RobotoRegular from "./Roboto-Regular.woff"
import ItimRegular from "./Itim-Regular.woff"
import PottaOneRegular from "./PottaOne-Regular.woff"
import HomeSVG from '../assets/HomeSVG.svg'

const GlobalStyle = () => (
  <Global
    styles={css`
      :root {
        --font-color: #00276F;
        --googleblue-color: #4285F4;
        --googlegreen-color: #34A853;
        --googleyellow-color: #FBBC05;
        --googleRed-color: #EA4335;
        --googleGray-color: #DFE1E5;
        --googleWhiteGray-color: #F8F9FA;
        --white-color: #FFFFFF;
      }

      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'), url(${RobotoRegular}) format('woff');
      }

      @font-face {
        font-family: 'Itim';
        font-style: normal;
        font-weight: 400;
        src: local('Itim'), local('Itim-Regular'), url(${ItimRegular}) format('woff');
      }

      @font-face {
        font-family: 'Potta One';
        font-style: normal;
        font-weight: 400;
        src: local('Potta One'), local('PottaOne-Regular'), url(${PottaOneRegular}) format('woff');
      }

      body {
        width: 100vw;
        height: 100vh;
        background-size: cover;
        max-width: 1280px;
        margin: 0 auto;
        background: url(${HomeSVG})
      }
    `}
  />
);

export default GlobalStyle;
