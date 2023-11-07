import { ThemeProvider } from "./ThemeProvider";
import { ArweaveProvider } from "./ArweaveProvider";
import { TxIdProvider } from "./TxIdProvider";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

export const Providers = (props: Props) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ArweaveProvider>
          <TxIdProvider>
            {children}
          </TxIdProvider>
        </ArweaveProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
