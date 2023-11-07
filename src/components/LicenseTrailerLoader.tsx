import { useTxInfo } from "@/hooks/useTxInfo";
import { LicenseConnector, LicenseConnectorProps } from "./LicenseConnector";

interface Props extends LicenseConnectorProps {
  trailerTxId: string;
}

export const LicenseTrailerLoader: React.FC<Props> = ({ trailerTxId, ...props }) => {
  const { isError, txInfo } = useTxInfo(trailerTxId);
  
  if (isError) {
    return (
      <div>Error Loading Trailer</div>
    )
  }

  if (!txInfo) {
    return (
      <div>Loading Trailer...</div>
    )
  }

  return (
    <LicenseConnector {...props} trailerTxInfo={txInfo} />
  )
}
