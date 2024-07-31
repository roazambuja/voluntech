import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      PRIMARY: string;
      PRIMARY_LIGHT: string;
      PRIMARY_DARK: string;
      SECONDARY: string;
      LIGHT: string;
      GREY: string;
      BLACK: string;
      WHITE: string;
      ERROR: string;
    };
    breakpoints: {
      MOBILE: string;
      TABLET: string;
      DESKTOP: string;
    };
  }
}
