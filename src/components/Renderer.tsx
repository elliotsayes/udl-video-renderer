import { zTxId } from "@/types/arweave";
import { useConnection } from "arweave-wallet-kit";
import { z } from "zod";

interface Props {
  renderTx: z.infer<typeof zTxId>;
}

export const Renderer = (props: Props) => {
  const { renderTx: tx } = props;

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
