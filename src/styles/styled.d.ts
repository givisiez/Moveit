import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      background: string;
      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      redDark: string;
      green: string;
      blue: string;
      blueDark: string;
      blueTwitter: string;
      after: string;
      before: string;
      backBox: string;
    };
  }
}
