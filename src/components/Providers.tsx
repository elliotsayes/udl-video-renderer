import { ThemeProvider } from "./ThemeProvider";
import { ArweaveProvider } from "./ArweaveProvider";
import { TxIdProvider } from "./TxIdProvider";

interface Props {
  children: React.ReactNode;
}

export const Providers = (props: Props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <ArweaveProvider>
        <TxIdProvider>
          {children}
        </TxIdProvider>
      </ArweaveProvider>
    </ThemeProvider>
  )
}
