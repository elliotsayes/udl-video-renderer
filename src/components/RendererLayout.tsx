import { Banner } from "./Banner"

interface Props {
  children: React.ReactNode;
}

export const RendererLayout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <Banner />
      {children}
    </div>
  )
}
