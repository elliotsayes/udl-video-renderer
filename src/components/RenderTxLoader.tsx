import { RenderTxResultFallback, useRenderTx } from "@/hooks/useRenderTx";
import React, { useEffect } from "react";
import { useTxIds } from "./TxIdProvider";

interface Props {
  children: React.ReactNode;
  fallbackComponent?: React.ComponentType<{
    renderTx: RenderTxResultFallback;
  }>;
}

export const RenderTxLoader = (props: Props) => {
  const { children, fallbackComponent } = props;

  const renderTx = useRenderTx();
  const { setTxId } = useTxIds();

  useEffect(() => {
    if (!(renderTx.state === 'valid')) return;
    setTxId("renderTx", renderTx.txId);
  }, [renderTx, setTxId])

  if (renderTx.state !== 'valid') {
    if (fallbackComponent) {
      return React.createElement(fallbackComponent, { renderTx });
    }
    return (
      <p>{renderTx.state}</p>
    )
  }

  return (
    <>
      {children}
    </>
  )
}
