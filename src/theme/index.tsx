import { ThemeProvider } from "styled-components";
import { ReactNode } from 'react'
import theme from './theme';

type ThemeProps = {
    children: ReactNode
};

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;