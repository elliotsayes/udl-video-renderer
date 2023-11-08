import { AppName } from "@/app";
import { ThemeButton } from "./ThemeButton";
import { ProfileConnectDropdown } from "./ProfileConnectDropdown";

export const Banner = () => {
  return (
    <div className="flex flex-row flex-grow-0 items-center justify-between bg-gradient-to-b from-primary/10 to-primary/5 py-2 px-4 h-16">
      <span className="text-xl font-semibold leading-none tracking-tight">
        {AppName}
      </span>
      <div className="flex flex-row gap-2 items-center">
        <ThemeButton />
        <ProfileConnectDropdown />
      </div>
    </div>
  )
}
