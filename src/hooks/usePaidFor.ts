import { usePayments } from "@/components/PaymentsProvider";
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
    const isPaidFor = await payments.isLicensed(contractAddress, walletAddress);
    console.log({ contractAddress, walletAddress, isPaidFor });
    return isPaidFor;
  };

  const {
    isLoading,
    isError,
    isSuccess,
    data: isPaidFor,
  } = useQuery(queryKey, fetchPaidFor);

  return { isLoading, isError, isSuccess, isPaidFor };
};
