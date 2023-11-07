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
    let licensePayment = 0;
    try {
      licensePayment = await payments.payment(contractAddress);
    } catch (e) {
      if ((e as Error)?.message == "License not Available") {
        return {
          hasLicense: false,
        } as LicensePaymentResult;
      }
      throw e;
    }
    return {
      hasLicense: true,
      requiresPayment: licensePayment > 0,
      licensePayment,
    };
  };

  const {
    isLoading,
    isError,
    isSuccess,
    data: licensePayment,
  } = useQuery<LicensePaymentResult>(queryKey, fetchLicensePayment);

  return { isLoading, isError, isSuccess, licensePayment };
};
