import { useQuery } from "react-query";
import { queryTransactionsGQL } from "arweavekit/graphql";
import type { Tag } from "arweave/web/lib/transaction";
import { DefaultArweaveGatewayHost } from "@/app";

export type TxInfo = {
  id: string;
  ownerKey: string;
  ownerAddress: string;
  tags: Tag[];
  blockTimestamp?: number;
};

export const useTxInfo = (txId: string) => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: txInfo,
  } = useQuery<TxInfo>(
    ["txInfo", txId],
    async () => {
      const txQuery = `
query {
  transactions(ids: ["${txId}"]) {
    edges {
      node {
        id
        owner {
          key
          address
        }
        tags {
          name
          value
        }
        block {
          timestamp
        }
      }
    }
  }
}
`;
      const results = await queryTransactionsGQL(txQuery, {
        gateway: DefaultArweaveGatewayHost,
        filters: {},
      });
      const transaction = results.data[0]?.node;
      if (!transaction) {
        throw new Error("Transaction not found");
      }
      return {
        id: transaction.id,
        ownerKey: transaction.owner.key,
        ownerAddress: transaction.owner.address,
        tags: transaction.tags,
        blockTimestamp: transaction.block?.timestamp,
      } as TxInfo;
    },
    {
      enabled: !!txId,
      cacheTime: 1000 * 60 * 5, // cache for 5 minutes
    }
  );

  return {
    isLoading,
    isError,
    isSuccess,
    txInfo,
  };
};
