import { getContractBazaarUrl, getTxArweaveGatewayUrl } from "@/lib/arweave";
import { VideoInfo, VideoPlayer } from "./VideoPlayer";
import { LicenseConnectorProps } from "./LicenseConnector";
import { usePaidFor } from "@/hooks/usePaidFor";
import { LoadingContent } from "./LoadingContent";
import { ErrorContent } from "./ErrorContent";
import { ToastOnce } from "./ToastOnce";
import { type Toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast";

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
      <ErrorContent>
        <p>Failed to load license</p>
      </ErrorContent>
    )
  }

  if (isPaidFor === undefined) {
    return (
      <LoadingContent>
        <p>
          <span>Licensed content!</span>{' '}
          Loading payment status...
        </p>
      </LoadingContent>
    )
  }

  if (isPaidFor === false) {
    if (!trailerTxInfo) {
      return (
        <div className="h-[100%] pb-16 flex flex-col flex-grow items-center justify-center">
          <div>
            <p className="text-2xl mb-2">
              Access Denied
            </p>
            <p>
              To view this content, please purchase<br />
              it on the{' '}
              <a
                href={getContractBazaarUrl(renderTxInfo.id)}
                target="_blank"
                className="underline"
              >
                BazAR Marketplace
              </a>
              .
            </p>  
          </div>
        </div>
      )
    }
  
    const trailerVideoInfo: VideoInfo = {
      url: getTxArweaveGatewayUrl(trailerTxInfo.id),
    }

    const trailerToast: Toast = {
      title: "Viewing trailer",
      description: "Please purchase this content on the BazAR Marketplace to watch the full video.",
      action: (
        <ToastAction
          altText="View asset on the BazAR Marketplace"
          onClick={() => window.open(getContractBazaarUrl(renderTxInfo.id), "_blank")}
        >
          Open on BazAR
        </ToastAction>
      ),
      // duration: Number.MAX_SAFE_INTEGER,
    };
  
    return (
      <>
        <VideoPlayer
          videoInfo={trailerVideoInfo}
        />
        <ToastOnce
          key={"trailer" + trailerTxInfo.id}
          toast={trailerToast}
        />
      </>
    )
  } 

  const renderVideoInfo: VideoInfo = {
    url: getTxArweaveGatewayUrl(renderTxInfo.id),
  }

  const paidForToast: Toast = {
    title: "Access Granted!",
    description: "Thank you for purchasing this video ❤️",
    action: (
      <ToastAction
        altText="View on the BazAR Marketplace"
        onClick={() => window.open(getContractBazaarUrl(renderTxInfo.id), "_blank")}
      >
        Open on BazAR
      </ToastAction>
    ),
  };

  return (
    <>
      <VideoPlayer
        videoInfo={renderVideoInfo} 
      />
      <ToastOnce
        key={"paid-for" + renderTxInfo.id}
        toast={paidForToast}
      />
    </>
  )
}
