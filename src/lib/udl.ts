import { z } from "zod";
import { TxInfo } from "@/hooks/useTxInfo";
import { zTxId } from "@/types/arweave";

export const getTrailerTxId = (
  txInfo: TxInfo
): z.infer<typeof zTxId> | undefined => {
  const trailerTag = txInfo.tags.find((tag) => tag.name === "Trailer");
  if (trailerTag === undefined) {
    // throw new Error("Trailer tag not found");
    return undefined;
  }
  const trailerTxIdParseResult = zTxId.safeParse(trailerTag.value);
  if (!trailerTxIdParseResult.success) {
    // throw new Error("Invalid trailer tag txId");
    return undefined;
  }
  return trailerTxIdParseResult.data;
};
