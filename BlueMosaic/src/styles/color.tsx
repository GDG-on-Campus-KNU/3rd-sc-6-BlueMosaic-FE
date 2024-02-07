import { Global, css } from '@emotion/react';

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

    `}
  />
);

export default GlobalStyle;