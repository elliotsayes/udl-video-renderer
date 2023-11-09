import React from "react";
import { useRenderTx } from "@/hooks/useRenderTx";
import { Renderer } from "./Renderer";
import { DefaultPage } from "./DefaultPage";

interface Props {}

export const RenderTxLoader: React.FC<Props> = () => {
  const renderTx = useRenderTx();

  if (renderTx.state !== 'valid') {
    return (
      <DefaultPage />
    )
  }

  return (
    <Renderer
      renderTxId={renderTx.txId}
    />
  )
}
