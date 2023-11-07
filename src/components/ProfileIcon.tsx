import { Avatar } from "@/components/ui/avatar"
import { Identicon } from "./Identicon";

interface Props {
  address?: string;
  onClick?: () => void;
  forceInteractive?: boolean;
}

export const ProfileIcon = (props: Props) => {
  const { address, onClick, forceInteractive } = props;

  const hasAddress = address !== undefined;
  const interactive = forceInteractive ?? onClick !== undefined;

  return (
    <Avatar
      className={`${interactive ? 'hover:shadow-lg cursor-pointer' : ''} ${hasAddress ? 'bg-secondary p-1' : 'bg-gradient-radial from-secondary to-secondary/90 animate-pulse'}`}
      onClick={onClick}
    >
      {
        hasAddress && (
          <Identicon
            address={address}
            size={8}
          />
        )
      }
    </Avatar>
  )
}
