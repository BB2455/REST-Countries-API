import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      elements: string;
      text: string;
      input?: string;
    };
  }
}
