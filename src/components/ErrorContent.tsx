import React from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: React.ReactNode;
  reload?: boolean;
}

export const ErrorContent: React.FC<Props> = ({ children, reload = true }) => {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center z-50">
      <div className="relative px-4 py-2">
        <p className='text-xl text-destructive'>
          An Error Occurred!
        </p>
        <div className='py-2'>
          {children}
        </div>
        {
          reload && (
            <Button
              variant={"outline"}
              onClick={() => window.location.reload()}
            >
              Reload
            </Button>
          )
        }
      </div>
    </div>
  );
};
