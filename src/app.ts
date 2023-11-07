import { AppInfo } from "arconnect";

export const AppName = import.meta.env.VITE_APP_NAME;
export const AppLogoUrl = import.meta.env.VITE_APP_LOGO_URL;

export const appInfo: AppInfo = {
  name: AppName,
  logo: AppLogoUrl,
};
