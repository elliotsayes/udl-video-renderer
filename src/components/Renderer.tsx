import { useLicensePayment } from "@/hooks/useLicensePayment";
import { useTxInfo } from "@/hooks/useTxInfo";
import { getTrailerTxId } from "@/lib/udl";
import { RendererLayout } from "./RendererLayout";
import { VideoInfo, VideoPlayer } from "./VideoPlayer";
import { getContentType, getTxArweaveGatewayUrl } from "@/lib/arweave";
import { LicenseTrailerLoader } from "./LicenseTrailerLoader";
import { LoadingContent } from "./LoadingContent";
import { LicenseConnector } from "./LicenseConnector";
import { ErrorContent } from "./ErrorContent";
import { ToastOnce } from "./ToastOnce";
import { type Toast } from "@/components/ui/use-toast";

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
        <ErrorContent>
          <p>License Error</p>
        </ErrorContent>
      </RendererLayout>
    )
  }

  if (isTxInfoError) {
    return (
      <RendererLayout>
        <ErrorContent>
          <p>Could not load transaction: {renderTxId}</p>
          <p>It may take some time to be available at the gateway.</p>
        </ErrorContent>
      </RendererLayout>
    )
  }

  if (!licensePayment) {
    return (
      <RendererLayout>
        <LoadingContent>
          <p>Loading License...</p>
        </LoadingContent>
      </RendererLayout>
    )
  }
  
  if (!txInfo) {
    return (
      <RendererLayout>
        <LoadingContent>
          <p>Loading Transaction Info...</p>
        </LoadingContent>
      </RendererLayout>
    )
  }

  if (!(contentType?.startsWith("video/") ?? false)) {
    // return (
    //   <RendererLayout>
    //     <ErrorContent>
    //       <p>
    //         Invalid Media Type. Only supports:{' '}<br />
    //         <code className="">Content-Type: video/*</code>
    //       </p>
    //     </ErrorContent>
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

  const renderToast: Toast = {
    title: "No license found",
    description: "This content is free to view. Enjoy!",
  }

  return (
    <RendererLayout>
      <VideoPlayer
        videoInfo={renderVideoInfo}
      />
      <ToastOnce
        toast={renderToast}
      />
    </RendererLayout>
  );
}
