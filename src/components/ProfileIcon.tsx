import { Avatar } from "@/components/ui/avatar"
import { Identicon } from "./Identicon";

interface Props {
  address?: string;
  onClick?: () => void;
}

export const ProfileIcon = (props: Props) => {
  const { address, onClick } = props;

  const hasAddress = address !== undefined;
  const hasOnClick = onClick !== undefined;

  return (
    <Avatar
      className={`${hasOnClick ? 'hover:shadow-lg cursor-pointer' : ''} ${hasAddress ? 'bg-secondary p-1' : 'bg-gradient-radial from-secondary to-secondary/90 animate-pulse'}`}
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
