import { Banner } from "./Banner"
import { Toaster } from "@/components/ui/toaster";

interface Props {
  children: React.ReactNode;
}

export const RendererLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <div className="h-screen min-h-[20em] flex flex-col items-stretch">
        <Banner />
        <div className="w-full h-full">
          {children}
        </div>
      </div>
      <Toaster />
    </>
  )
}
