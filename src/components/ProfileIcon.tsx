import { Avatar } from "@/components/ui/avatar"
import { Identicon } from "./Identicon";

interface Props {
  address?: string;
  onClick?: () => void;
}

export const ProfileIcon = (props: Props) => {
  const { address, onClick } = props;

  const hasAddress = address !== undefined;

  return (
    <Avatar
      className={`${hasAddress ? 'bg-primary/10 p-1' : 'bg-gradient-radial from-primary/10 to-primary/20 animate-pulse'}`}
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
