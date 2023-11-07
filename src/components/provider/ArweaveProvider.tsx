import { appInfo } from "@/app"
import { ArweaveWalletKit } from "arweave-wallet-kit"
import { useTheme } from "./ThemeProvider"

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
        accent: {
          r: 127,
          g: 127,
          b: 0,
        },
        titleHighlight: {
          r: 0,
          g: 127,
          b: 127,
        },
        radius: "default",
      }}
    >
      {children}
    </ArweaveWalletKit>
  )
}
