import { toast } from "react-toastify";

export function notify(message: string) {
  return toast(message);
}
