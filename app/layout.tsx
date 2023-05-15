import GlobalStyle from "../lib/styled";
import StyledComponentsRegistry from "../lib/registry";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Demo Page</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
