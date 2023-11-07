import React, { createContext, useCallback, useContext } from 'react';
import { z } from 'zod';
import { zTxId } from '@/types/arweave';

type TxIdMap = Map<string, string>;

const TxIdContext = createContext<TxIdMap>(new Map());

interface TxIdProviderProps {
  txIds?: TxIdMap;
  children: React.ReactNode;
}

const defaultTxIds = new Map();

export const TxIdProvider: React.FC<TxIdProviderProps> = ({ txIds, children }) => {
  return (
    <TxIdContext.Provider value={txIds ?? defaultTxIds}>
      {children}
    </TxIdContext.Provider>
  );
};

export const useTxIds = () => {
  const txIds = useContext(TxIdContext);

  const setTxId = useCallback((key: string, txId: z.infer<typeof zTxId>) => {
    txIds.set(key, txId);
  }, [txIds]);

  const getTxIds = useCallback(() => {
    return txIds;
  }, [txIds]);

  return {
    setTxId,
    getTxIds,
  }
}

export const useTxId = (key: string) => {
  const txIds = useContext(TxIdContext)
  return txIds.get(key);
}
