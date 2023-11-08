import { usePayments } from "@/components/provider/PaymentsProvider";
import { useQuery } from "react-query";

interface UsePaidForProps {
  contractAddress: string;
  walletAddress: string;
}

export const usePaidFor = ({
  contractAddress,
  walletAddress,
}: UsePaidForProps) => {
  const payments = usePayments();

  const queryKey = ["paidFor", contractAddress, walletAddress];

  const fetchPaidFor = async () => {
    // Call your API or blockchain service to check if the transaction has been paid for by the current wallet
    try {
      const isPaidFor = await payments.isLicensed(
        contractAddress,
        walletAddress
      );
      console.log({ contractAddress, walletAddress, isPaidFor });
      return isPaidFor;
    } catch (e) {
      const isPaidForErrorMessage = (e as Error)?.message;
      if (isPaidForErrorMessage === "No Interactions Found") {
        return false;
      }
      console.error({ isPaidForErrorMessage });
      throw e;
    }
  };

  const {
    isLoading,
    isError,
    isSuccess,
    data: isPaidFor,
  } = useQuery(queryKey, fetchPaidFor);

  return { isLoading, isError, isSuccess, isPaidFor };
};
