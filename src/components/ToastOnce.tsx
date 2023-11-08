import { useEffect, useState } from "react"
import { useToast } from "./ui/use-toast"
import { type Toast } from "@/components/ui/use-toast"

interface Props {
  toast: Toast,
}

export const ToastOnce: React.FC<Props> = ({ toast }) => {
  const { toast: fireToast } = useToast()
  const [toastFired, setToastFired] = useState(false)

  useEffect(() => {
    if (!toastFired) {
      fireToast(toast)
      setToastFired(true)
    }
  }, [toast, fireToast, toastFired]);
  
  return null;
}
