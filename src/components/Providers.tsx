import { ThemeProvider } from "./ThemeProvider";
import { ArweaveProvider } from "./ArweaveProvider";

interface Props {
  children: React.ReactNode;
}

export const Providers = (props: Props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <ArweaveProvider>
        {children}
      </ArweaveProvider>
    </ThemeProvider>
  )
}
