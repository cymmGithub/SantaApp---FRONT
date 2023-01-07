import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      fonts: {
        body: `'Arial', sans-serif`,
      },
      body: {
        bg: "",
      },
    }),
  },
});

export default theme;
