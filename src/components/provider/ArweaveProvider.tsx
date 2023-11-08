import { appInfo } from "@/app"
import { ArweaveWalletKit } from "arweave-wallet-kit"
import { useTheme } from "./ThemeProvider"

// light primary: 210 40% 98% => 248, 250, 252
const lightPrimary = {
  r: 248,
  g: 250,
  b: 252,
}
// dark primary: 222.2 47.4% 11.2% => 15, 23, 42
const darkPrimary = {
  r: 15,
  g: 23,
  b: 42,
}

interface Props {
  children: React.ReactNode
}

export const ArweaveProvider = (props: Props) => {
  const { children } = props

  const { activeTheme } = useTheme()

  return (
    <ArweaveWalletKit
      config={{
        permissions: ["ACCESS_ADDRESS"],
        ensurePermissions: false,
        appInfo: appInfo
      }}
      theme={{
        displayTheme: activeTheme,
        accent: activeTheme === "light" ? darkPrimary  : lightPrimary,
        titleHighlight: activeTheme === "light" ? darkPrimary : lightPrimary,
        radius: "default",
      }}
    >
      {children}
    </ArweaveWalletKit>
  )
}
