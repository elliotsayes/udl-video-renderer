import { DefaultArweaveGateway } from "@/app";
import { TxInfo } from "@/hooks/useTxInfo";

export const getTxArweaveGatewayUrl = (txId: string) => {
  return `${DefaultArweaveGateway}/${txId}`;
};

export const getContractBazaarUrl = (txId: string) => {
  return `https://bazar.arweave.dev/#/asset/${txId}`;
};

export const getContentType = (txInfo: TxInfo): string | undefined => {
  const contentType = txInfo.tags.find(
    (tag) => tag.name.toLowerCase() === "content-type"
  );
  if (contentType === undefined) {
    // throw new Error("Trailer tag not found");
    return undefined;
  }
  return contentType.value;
};
