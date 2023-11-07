import { useConnection } from "arweave-wallet-kit";

export const Renderer = () => {
  const { connected, connect, disconnect } = useConnection();

  return (
    <div>
      <h1>Renderer</h1>
      <p>Connected: {connected ? "true" : "false"}</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}
