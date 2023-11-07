import { RenderTxResultFallback } from "@/hooks/useRenderTx"

interface Props {
  renderTx: RenderTxResultFallback
}

export const RenderTxFallback = (props: Props) => {
  const { renderTx } = props;

  return (
    <div className="bg-red-500">
      {renderTx.state}
    </div>
  )
}
