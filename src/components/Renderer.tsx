import { useConnection } from "arweave-wallet-kit";
import { useTxId } from "./TxIdProvider";

export const Renderer = () => {
  const tx = useTxId("renderTx");

  const { connected, connect, disconnect } = useConnection();

  return (
    <div>
      <h1>Renderer</h1>
      <p>TxId: {tx}</p>
      <p>Connected: {connected ? "true" : "false"}</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}
