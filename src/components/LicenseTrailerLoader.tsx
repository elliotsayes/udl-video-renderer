import { useTxInfo } from "@/hooks/useTxInfo";
import { LicenseConnector, LicenseConnectorProps } from "./LicenseConnector";
import { LoadingContent } from "./LoadingContent";
import { ErrorContent } from "./ErrorContent";

interface Props extends LicenseConnectorProps {
  trailerTxId: string;
}

export const LicenseTrailerLoader: React.FC<Props> = ({ trailerTxId, ...props }) => {
  const { isError, txInfo } = useTxInfo(trailerTxId);
  
  if (isError) {
    return (
      <ErrorContent>
        <div>Error Loading Trailer</div>
      </ErrorContent>
    )
  }

  if (!txInfo) {
    return (
      <LoadingContent>
        <div>Loading Trailer...</div>
      </LoadingContent>
    )
  }

  return (
    <LicenseConnector {...props} trailerTxInfo={txInfo} />
  )
}
