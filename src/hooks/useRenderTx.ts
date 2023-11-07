import { useEffect, useState } from "react";
import { zTxId } from "@/types/arweave";
import { z } from "zod";

export type RenderTxResultFallback =
  | {
      state: "loading";
    }
  | {
      state: "missing";
    }
  | {
      state: "invalid";
    };

export type RenderTxResultValid = {
  state: "valid";
  txId: z.infer<typeof zTxId>;
};

export type RenderTxResult = RenderTxResultFallback | RenderTxResultValid;

export const useRenderTx = () => {
  const [tx, setTx] = useState<RenderTxResult>({ state: "loading" });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const txParam = searchParams.get("tx");

    if (!txParam) {
      setTx({ state: "missing" });
      return;
    }

    const txIdParseResult = zTxId.safeParse(txParam);
    if (!txIdParseResult.success) {
      setTx({ state: "invalid" });
      return;
    }

    setTx({ state: "valid", txId: txIdParseResult.data });
  }, []);

  return tx;
};
