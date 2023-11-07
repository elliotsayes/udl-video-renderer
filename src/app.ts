import { AppInfo } from "arconnect";

export const AppName = import.meta.env.VITE_APP_NAME;
export const AppLogoUrl = import.meta.env.VITE_APP_LOGO_URL;

export const appInfo: AppInfo = {
  name: AppName,
  logo: AppLogoUrl,
};

export const DefaultArweaveGateway = import.meta.env
  .VITE_DEFAULT_ARWEAVE_GATEWAY;
export const DefaultArweaveGatewayHost = import.meta.env
  .VITE_DEFAULT_ARWEAVE_GATEWAY_HOST;
