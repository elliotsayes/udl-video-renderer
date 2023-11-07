import React from "react";
import { RenderTxResultFallback, useRenderTx } from "@/hooks/useRenderTx";
import { Renderer } from "./Renderer";

interface Props {
  fallbackComponent?: React.ComponentType<{
    renderTx: RenderTxResultFallback;
  }>;
}

export const RenderTxLoader = (props: Props) => {
  const { fallbackComponent } = props;

  const renderTx = useRenderTx();

  if (renderTx.state !== 'valid') {
    if (fallbackComponent) {
      return React.createElement(fallbackComponent, { renderTx });
    }
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
