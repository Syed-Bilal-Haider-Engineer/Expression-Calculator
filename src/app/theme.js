'use client';

import {createTheme} from '@mui/material/styles';

export const InlineCalculatorTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f4b942',
    },
    secondary: {
      main: '#7aa2ff',
    },
    error: {
      main: '#ff6b7a',
    },
    background: {
      default: '#0b1020',
      paper: '#151b2e',
    },
    text: {
      primary: '#eef2ff',
      secondary: '#9aa6c3',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});
