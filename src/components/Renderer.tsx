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
import { useActiveAddress } from "arweave-wallet-kit";

interface Props {
  renderTxId: string;
}

export const Renderer: React.FC<Props> = ({ renderTxId }) => {
  const address = useActiveAddress();

  const { isError: isLicenseError, licensePayment } = useLicensePayment({
    contractAddress: renderTxId,
  });

  const { isError: isTxInfoError, txInfo } = useTxInfo(renderTxId);
  const trailerTxId = txInfo && getTrailerTxId(txInfo);
  const contentType = txInfo && getContentType(txInfo);

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

  if (isLicenseError) {
    return (
      <RendererLayout>
        <ErrorContent>
          <p>Failed to retrieve license information</p>
        </ErrorContent>
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
    return (
      <RendererLayout>
        <ErrorContent>
          <p>
            Invalid Media Type. Only supports: <br />
            <code className="">Content-Type: video/*</code>
          </p>
        </ErrorContent>
      </RendererLayout>
    )
  }

  const isOwner = address === txInfo.ownerAddress;

  if (isOwner) {
    const renderVideoInfo: VideoInfo = {
      url: getTxArweaveGatewayUrl(renderTxId)
    }

    const ownerToast: Toast = {
      title: "You own this content",
      description: "You can view this content for free!",
    }
  
    return (
      <RendererLayout>
        <VideoPlayer
          videoInfo={renderVideoInfo}
        />
        <ToastOnce
          key={"render" + renderTxId}
          toast={ownerToast}
        />
      </RendererLayout>
    );
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

  if (!isOwner && licensePayment.hasLicense && licensePayment.requiresPayment) {
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

  const noLicenseToast: Toast = {
    title: "No license found",
    description: "This content is free to view. Enjoy!",
  }

  return (
    <RendererLayout>
      <VideoPlayer
        videoInfo={renderVideoInfo}
      />
      <ToastOnce
        key={"render" + renderTxId}
        toast={noLicenseToast}
      />
    </RendererLayout>
  );
}
