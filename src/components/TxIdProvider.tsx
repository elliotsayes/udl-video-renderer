import React, { createContext, useContext } from 'react';
import { z } from 'zod';
import { zTxId } from '@/types/arweave';

type TxIdMap = Map<string, string>;

const TxIdContext = createContext<TxIdMap>(new Map());

interface TxIdProviderProps {
  txIds: TxIdMap;
  children: React.ReactNode;
}

export const TxIdProvider: React.FC<TxIdProviderProps> = ({ txIds, children }) => {
  return (
    <TxIdContext.Provider value={txIds}>
      {children}
    </TxIdContext.Provider>
  );
};

export const useTxIds = () => {
  const txIds = useContext(TxIdContext);

  return {
    setTxId: (key: string, txId: z.infer<typeof zTxId>) => txIds.set(key, txId),
    getTxIds: () => txIds,
  }
}

export const useTxId = (key: string) => {
  const txIds = useContext(TxIdContext)
  return txIds.get(key);
}
