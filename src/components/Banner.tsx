import { AppName } from "@/app";
import { ThemeButton } from "./ThemeButton";
import { ConnectButton } from "arweave-wallet-kit";
// import { useTheme } from "./provider/ThemeProvider";

// light primary: 210 40% 98% => 248, 250, 252
// const lightPrimary = 'rgb(248,250,252)'
// dark primary: 222.2 47.4% 11.2% => 15, 23, 42
const darkPrimary = 'rgb(15,23,42)'

export const Banner = () => {
  // const { activeTheme } = useTheme()

  return (
    <div className="flex flex-row flex-grow-0 items-center justify-between bg-gradient-to-b from-primary/10 to-primary/5 py-2 px-4 h-16">
      <span className="text-xl font-semibold leading-none tracking-tight">
        <a
          href="./"
        >
          {AppName}
        </a>
      </span>
      <div className="flex flex-row gap-2 items-center">
        <ThemeButton />
        <ConnectButton
          profileModal={true}
          showBalance={true}
          accent={darkPrimary}
          className="text-primary"
        />
      </div>
    </div>
  )
}
