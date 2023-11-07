import { useActiveAddress, useConnection } from "arweave-wallet-kit";
import { Button } from "./ui/button";
import { AppName } from "@/app";
import { ProfileIcon } from "./ProfileIcon";
import { ThemeButton } from "./ThemeButton";

export const Banner = () => {
  const { connected, connect, disconnect } = useConnection();
  const address = useActiveAddress();

  return (
    <div className="flex flex-row flex-grow-0 items-center justify-between bg-gradient-to-b from-primary/10 to-primary/5 py-2 px-3 h-14">
      <span className="text-xl font-semibold leading-none tracking-tight">
        {AppName}
      </span>
      <div className="flex flex-row gap-4 items-center">
        <ThemeButton />
        {
          connected ? (
            address ? (
              <ProfileIcon 
                address={address}
                onClick={disconnect}
              />
            ) : (
              <p>Loading...</p>
            )
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
