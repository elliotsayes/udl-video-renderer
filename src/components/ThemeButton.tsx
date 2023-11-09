import { useTheme } from "./provider/ThemeProvider";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const ThemeButton = () => {
  const { activeTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(activeTheme === "light" ? "dark" : "light");
  }, [activeTheme, setTheme]);

  return (
    <Button
      variant={"ghost"}
      onClick={toggleTheme}
      size={"iconSm"}
    >
      {
        activeTheme === "light" ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )
      }
    </Button>
  )
}
