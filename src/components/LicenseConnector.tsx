import { TxInfo } from "@/hooks/useTxInfo"
import { useConnection, useActiveAddress } from "arweave-wallet-kit";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LicenseRenderer } from "./LicenseRenderer";

export interface LicenseConnectorProps {
  renderTxInfo: TxInfo;
  trailerTxInfo?: TxInfo;
}

export const LicenseConnector: React.FC<LicenseConnectorProps> = ({ ...props }) => {
  const [connectFired, setConnectFired] = useState(false)
  const { connected, connect } = useConnection()
  const address = useActiveAddress()

  useEffect(() => {
    if (!connectFired && !connected) {
      setConnectFired(true)
      connect()
    }
  }, [connectFired, connected, connect])

  if (!address) {
    return (
      <>
        <p>Please connect</p>
        <Button
          onClick={connect}
        >
          Open Wallet
        </Button>
      </>
    )
  }

  return (
    <LicenseRenderer
      {...props}
      address={address}
    />
  )
}
