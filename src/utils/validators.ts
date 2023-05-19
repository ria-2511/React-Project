import { EnglishCharRegex, PhoneRegex, PinCodeRegex } from "utils/constants"
import * as Yup from "yup"
import { States } from "utils/constants"

export const AddressFormSchema = Yup.object().shape({
  recipientName: Yup.string().required("Invalid! Please enter valid name.").matches(EnglishCharRegex, "Invalid! Please enter valid First Name."),
  addressLine1: Yup.string().required("Invalid! Please enter valid address line 1."),
  city: Yup.string().required("Invalid! Please enter valid city.").matches(EnglishCharRegex, "Invalid! Please enter valid city."),
  state: Yup.string()
    .required("Please select a valid state.")
    .matches(EnglishCharRegex, "Please select a valid state.")
    .oneOf(
      States.map((option) => {
        return option.value
      }),
    ),
  pincode: Yup.string()
    .required("Invalid! Please enter 6 digit PIN code.")
    .matches(PinCodeRegex, "Invalid! Please enter 6 digit PIN code.")
    .min(6, "Invalid! Please enter 6 digit PIN code.")
    .max(6, "Invalid! Please enter 6 digit PIN code."),
  mobile: Yup.string()
    .required("Invalid! Please enter 10 digit mobile number.")
    .matches(PhoneRegex, "Invalid! Please enter 10 digit mobile number.")
    .min(10, "Invalid! Please enter 10 digit mobile number.")
    .max(10, "Invalid! Please enter 10 digit mobile number."),
})
