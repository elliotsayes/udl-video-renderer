import React from "react";
import { useRenderTx } from "@/hooks/useRenderTx";
import { Renderer } from "./Renderer";
import { DefaultPage } from "./DefaultPage";
import { RendererLayout } from "./RendererLayout";
import { LoadingContent } from "./LoadingContent";
import { ErrorContent } from "./ErrorContent";

interface Props {}

export const RenderTxLoader: React.FC<Props> = () => {
  const renderTx = useRenderTx();

  if (renderTx.state === "missing") {
    return (
      <DefaultPage />
    )
  }

  if (renderTx.state === "loading") {
    return (
      <RendererLayout>
        <LoadingContent>
          <p>Loading...</p>
        </LoadingContent>
      </RendererLayout>
    )
  }

  if (renderTx.state === "invalid") {
    return (
      <RendererLayout>
        <ErrorContent reload={false}>
          <p>Invalid Transaction Id</p>
        </ErrorContent>
      </RendererLayout>
    )
  }

  return (
    <Renderer
      renderTxId={renderTx.txId}
    />
  )
}
