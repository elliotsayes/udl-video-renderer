import { useLicensePayment } from "@/hooks/useLicensePayment";
import { useTxInfo } from "@/hooks/useTxInfo";
import { getTrailerTxId } from "@/lib/udl";
import { RendererLayout } from "./RendererLayout";
import { VideoInfo, VideoPlayer } from "./VideoPlayer";
import { getContentType, getTxArweaveGatewayUrl } from "@/lib/arweave";
import { LicenseConnector } from "./LicenseConnector";
import { LicenseTrailerLoader } from "./LicenseTrailerLoader";

interface Props {
  renderTxId: string;
}

export const Renderer: React.FC<Props> = ({ renderTxId }) => {
  const { isError: isLicenseError, licensePayment } = useLicensePayment({
    contractAddress: renderTxId,
  });

  const { isError: isTxInfoError, txInfo } = useTxInfo(renderTxId);
  const trailerTxId = txInfo && getTrailerTxId(txInfo);
  const contentType = txInfo && getContentType(txInfo);

  if (isLicenseError) {
    return (
      <RendererLayout>
        <p>License Error</p>
      </RendererLayout>
    )
  }

  if (isTxInfoError) {
    return (
      <RendererLayout>
        <p>Transaction Error</p>
      </RendererLayout>
    )
  }

  if (!licensePayment) {
    return (
      <RendererLayout>
        <p>Loading License...</p>
      </RendererLayout>
    )
  }
  
  if (!txInfo) {
    return (
      <RendererLayout>
        <p>Loading Transaction Info...</p>
      </RendererLayout>
    )
  }

  if (!(contentType?.startsWith("video/") ?? false)) {
    // return (
    //   <RendererLayout>
    //     <p>Invalid Media Type</p>
    //   </RendererLayout>
    // )
  }

  if (licensePayment.hasLicense && licensePayment.requiresPayment) {
    return (
      <RendererLayout>
        {
          trailerTxId ? (
            <LicenseTrailerLoader
              renderTxInfo={txInfo}
              trailerTxId={trailerTxId}
            />
          ) : (
            <LicenseConnector
              renderTxInfo={txInfo}
            />
          )
        }
      </RendererLayout>
    )
  }
  
  const renderVideoInfo: VideoInfo = {
    url: getTxArweaveGatewayUrl(renderTxId)
  }

  return (
    <RendererLayout>
      <VideoPlayer
        videoInfo={renderVideoInfo}
      />
    </RendererLayout>
  );
}
