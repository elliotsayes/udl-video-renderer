import { useConnection } from "arweave-wallet-kit";
import { useTxId, useTxIds } from "./TxIdProvider";
import { useTxInfo } from "@/hooks/useTxInfo";
import { getTrailerTxId } from "@/lib/udl";
import { useEffect } from "react";

export const Renderer = () => {
  const renderTxId = useTxId("renderTx")!;
  const { isSuccess, txInfo } = useTxInfo(renderTxId);
  const trailerTxId = txInfo && getTrailerTxId(txInfo);

  const { setTxId } = useTxIds();

  useEffect(() => {
    if (!trailerTxId) return;
    setTxId("trailerTx", trailerTxId);
  }, [setTxId, trailerTxId])

  const { connected, connect, disconnect } = useConnection();

  return (
    <div>
      <h1>Renderer</h1>
      <p>TxId: {renderTxId}</p>
      <p>Info: {isSuccess && JSON.stringify(txInfo)}</p>
      <p>Connected: {connected ? "true" : "false"}</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}
