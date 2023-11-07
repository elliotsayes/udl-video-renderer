import { getContractBazaarUrl, getTxArweaveGatewayUrl } from "@/lib/arweave";
import { VideoInfo, VideoPlayer } from "./VideoPlayer";
import { LicenseConnectorProps } from "./LicenseConnector";
import { usePaidFor } from "@/hooks/usePaidFor";
import { LoadingContent } from "./LoadingContent";

interface Props extends LicenseConnectorProps {
  address: string;
}

export const LicenseRenderer: React.FC<Props> = ({ renderTxInfo, address, trailerTxInfo }) => {
  const { isError, isPaidFor } = usePaidFor({
    contractAddress: renderTxInfo.id,
    walletAddress: address,
  })

  if (isError) {
    return (
      <p>Error loading license</p>
    )
  }

  if (isPaidFor === undefined) {
    return (
      <LoadingContent>
        <p>Loading payment status...</p>
      </LoadingContent>
    )
  }

  if (isPaidFor === false) {
    if (!trailerTxInfo) {
      return (
        <p>Please purchase{' '}
          <a
            href={getContractBazaarUrl(renderTxInfo.id)}
            target="_blank"
            className="underline"
          >
            here
          </a>
          .
        </p>
      )
    }
  
    const trailerVideoInfo: VideoInfo = {
      url: getTxArweaveGatewayUrl(trailerTxInfo.id),
    }
  
    return (
      <>
        <span>Trailer:</span>
        <VideoPlayer
          videoInfo={trailerVideoInfo}
        />
        <p>Please purchase{' '}
          <a
            href={getContractBazaarUrl(renderTxInfo.id)}
            target="_blank"
            className="underline"
          >
            here
          </a>
          .
        </p>
      </>
    )
  } 

  const renderVideoInfo: VideoInfo = {
    url: getTxArweaveGatewayUrl(renderTxInfo.id),
  }

  return (
    <>
      <h1>Your Video</h1>
      <VideoPlayer
        videoInfo={renderVideoInfo} 
      />
      <p>Thank you for your support in purchasing</p>
    </>
  )
}
