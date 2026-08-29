import './globals.css'
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {Inter} from 'next/font/google'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {InlineCalculatorTheme} from "@/app/theme";
import {AppHeader} from "@/components/AppHeader";
import Container from "@mui/material/Container";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expression Calculator',
  description: 'Regex-validated expression calculator with a keypad, history, and no eval().',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={InlineCalculatorTheme}>
            <CssBaseline />
            <AppHeader />
            <Container
              data-testid="layout"
              maxWidth="md"
              sx={{ marginTop: 2, marginBottom: 3 }}
            >
            {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
