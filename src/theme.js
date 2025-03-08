import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // 0px - 700px
      sm: 700, // 700px - 960px
      md: 960, // 960px - 1280px
      lg: 1280, // 1280px - 1920px
      xl: 1920, // 1920px and above
    },
  },
});

export default theme;