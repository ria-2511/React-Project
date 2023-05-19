/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 */
import { ApisauceInstance, create } from "apisauce"
import { Console, isDev, loadString, remove } from "utils"
import type { ApiConfig } from "./api.types"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  url: window.env.API_URL || "",
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
    this.apisauce.addAsyncRequestTransform((request) => async () => {
      Console.log(request)
    })
    this.apisauce.addAsyncResponseTransform((response) => async () => {
      Console.log(response)
    })
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
