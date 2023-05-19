export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
  catchErrors: "always" | "dev" | "prod" | "never"
}

const BaseConfig: ConfigBaseProps = {
  persistNavigation: "never",
  catchErrors: "dev",
}

export default BaseConfig
