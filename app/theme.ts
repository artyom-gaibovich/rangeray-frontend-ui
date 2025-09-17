import { createTheme } from '@mui/material/styles';

const primaryRed = 'rgb(195, 72, 73)';
const bgGray = 'rgb(51, 51, 51)';
const accentBlue = 'rgb(175, 213, 251)';
const white = 'rgb(255, 255, 255)';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primaryRed,
      contrastText: white,
    },
    secondary: {
      main: accentBlue,
    },
    background: {
      default: bgGray,
      paper: '#2d2d2d', // чуть темнее для карточек
    },
    text: {
      primary: white,
      secondary: accentBlue,
    },
  },
  typography: {
    fontFamily: "'Jetbrains Mono', 'Roboto Mono', monospace",
    h1: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 700 },
    h2: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 700 },
    h3: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 700 },
    h4: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 700 },
    h5: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 700 },
    h6: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 700 },
    body1: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 400 },
    body2: { fontFamily: "'Jetbrains Mono', monospace", fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d2d2d',
          border: `1px solid ${accentBlue}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#3a3a3a',
          color: white,
          fontWeight: 600,
        },
      },
    },
  },
});
