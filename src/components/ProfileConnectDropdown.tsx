import { useActiveAddress, useConnection } from "arweave-wallet-kit";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExitIcon } from "@radix-ui/react-icons";
import { ProfileIcon } from "./ProfileIcon";
import { Button } from "./ui/button";

export const ProfileConnectDropdown = () => {
  const { connected, connect, disconnect } = useConnection();
  const address = useActiveAddress();

  if(!connected) {
    return (
      <Button
        variant={"secondary"}
        onClick={connect}
        size={"sm"}
      >
        Connect Wallet
      </Button>
    )
  }
   
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileIcon
          address={address}
          forceInteractive={true}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={disconnect}>
            <ExitIcon className="mr-2 h-4 w-4" />
            <span>Logout</span>
            {/* <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
