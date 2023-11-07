import React, { createContext, useContext } from "react";
import Payments from "@permaweb/payments";
import type { Payments as PaymentsType } from "@permaweb/payments";

// Create a context for the Payments instance
const PaymentsContext = createContext<PaymentsType | null>(null);

interface PaymentsProviderProps {
  children: React.ReactNode;
}

// Provider component that provides the Payments instance to its children
const PaymentsProvider: React.FC<PaymentsProviderProps> = ({ children }) => {
  // Create a new instance of the Payments class
  const payments = Payments.init({
    gateway: 'https://arweave.net',
    warp: {},
    wallet: {},
  });

  return (
    <PaymentsContext.Provider value={payments}>
      {children}
    </PaymentsContext.Provider>
  );
};

// Hook to access the Payments instance from a child component
const usePayments = (): PaymentsType => {
  const payments = useContext(PaymentsContext);
  if (!payments) {
    throw new Error("usePayments must be used within a PaymentsProvider");
  }
  return payments;
};

export { PaymentsProvider, usePayments };
