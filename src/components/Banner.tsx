import { useActiveAddress, useConnection } from "arweave-wallet-kit";
import { Button } from "./ui/button";
import { AppName } from "@/app";
import { ProfileIcon } from "./ProfileIcon";
import { ThemeButton } from "./ThemeButton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExitIcon } from "@radix-ui/react-icons";

export const Banner = () => {
  const { connected, connect, disconnect } = useConnection();
  const address = useActiveAddress();

  return (
    <div className="flex flex-row flex-grow-0 items-center justify-between bg-gradient-to-b from-primary/10 to-primary/5 py-2 px-4 h-14">
      <span className="text-xl font-semibold leading-none tracking-tight">
        {AppName}
      </span>
      <div className="flex flex-row gap-2 items-center">
        <ThemeButton />
        {
          connected ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ProfileIcon
                  address={address}
                  onClick={() => {}}
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
          ) : (
            <Button
              variant={"secondary"}
              onClick={connect}
              size={"sm"}
            >
              Connect Wallet
            </Button>
          )
        }
      </div>
    </div>
  )
}
