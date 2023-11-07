import React from "react";
import { useRenderTx } from "@/hooks/useRenderTx";
import { Renderer } from "./Renderer";

interface Props {}

export const RenderTxLoader: React.FC<Props> = () => {
  const renderTx = useRenderTx();

  if (renderTx.state !== 'valid') {
    return (
      <p>{renderTx.state}</p>
    )
  }

  return (
    <Renderer
      renderTxId={renderTx.txId}
    />
  )
}
