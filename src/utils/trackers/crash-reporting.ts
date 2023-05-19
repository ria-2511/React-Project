import { Console } from "utils"

export const ReportCrash = (error: any) => {
  const message = error.message || "Unknown"
  Console.error(error)
  Console.log(message)
  Console.log(error)
}
