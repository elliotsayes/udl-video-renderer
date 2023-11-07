import { useLicensePayment } from "@/hooks/useLicensePayment";
import { useTxId, useTxIds } from "./TxIdProvider";
import { useTxInfo } from "@/hooks/useTxInfo";
import { getTrailerTxId } from "@/lib/udl";
import { useEffect } from "react";

export const Renderer = () => {
  const renderTxId = useTxId("renderTx")!;
  const { licensePayment } = useLicensePayment({
    contractAddress: renderTxId,
  });

  const { isSuccess, txInfo } = useTxInfo(renderTxId);
  const trailerTxId = txInfo && getTrailerTxId(txInfo);

  const { setTxId } = useTxIds();

  useEffect(() => {
    if (!trailerTxId) return;
    setTxId("trailerTx", trailerTxId);
  }, [setTxId, trailerTxId]);

  return (
    <div>
      <h1>Renderer</h1>
      <p>TxId: {renderTxId}</p>
      <p>Info: {isSuccess && JSON.stringify(txInfo)}</p>
      <p>Has License: {JSON.stringify(licensePayment)}</p>
    </div>
  );
}
