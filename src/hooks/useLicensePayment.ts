import { usePayments } from "@/components/PaymentsProvider";
import { useQuery } from "react-query";

interface UseLicensePaymentProps {
  contractAddress: string;
}

type LicensePaymentResult =
  | {
      hasLicense: false;
    }
  | {
      hasLicense: true;
      requiresPayment: boolean;
      licensePayment: number;
    };

export const useLicensePayment = ({
  contractAddress,
}: UseLicensePaymentProps) => {
  const payments = usePayments();

  const queryKey = ["licensePayment", contractAddress];

  const fetchLicensePayment = async () => {
    try {
      const licensePayment = await payments.payment(contractAddress);
      return {
        hasLicense: true,
        requiresPayment: licensePayment > 0,
        licensePayment,
      } as LicensePaymentResult;
    } catch (e) {
      if ((e as Error)?.message == "License not Available") {
        return {
          hasLicense: false,
        } as LicensePaymentResult;
      }
      throw e;
    }
  };

  const {
    isLoading,
    isError,
    isSuccess,
    data: licensePayment,
  } = useQuery<LicensePaymentResult>(queryKey, fetchLicensePayment);

  return { isLoading, isError, isSuccess, licensePayment };
};
