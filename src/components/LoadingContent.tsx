import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const LoadingContent: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center bg-primary-foreground z-50">
      <div className="animate-spin h-20 w-20 rounded-full border-t-2 border-b-2 border-primary"></div>
      <div className="mt-4 text-primary/80">
        {children}
      </div>
    </div>
  );
};
