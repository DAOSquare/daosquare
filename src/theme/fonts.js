import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Montserrat-Regular.ttf') format('truetype');
      },@font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./fonts/Montserrat-SemiBold.ttf') format('truetype');
      }@font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('./fonts/Montserrat-Black.ttf') format('truetype');
      }
      `}
  />
);

export default Fonts;
