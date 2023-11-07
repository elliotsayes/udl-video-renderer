import { ThemeProvider } from "./ThemeProvider";
import { ArweaveProvider } from "./ArweaveProvider";
import { QueryClient, QueryClientProvider } from 'react-query';
import { PaymentsProvider } from "./PaymentsProvider";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

export const Providers = (props: Props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ArweaveProvider>
          <PaymentsProvider>
            {children}
          </PaymentsProvider>
        </ArweaveProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
