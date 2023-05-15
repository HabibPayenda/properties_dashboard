import * as yup from "yup";

const userEditSchema = yup.object().shape({
  name: yup
    .string()
    .required("A user should have a name")
    .min(4, "User name should be at least 4 characters long"),
  password: yup
    .string()
    .required("A user should have a passowrd")
    .min(4, "User password must be at least 4 characters long"),
  date_of_birth: yup.date().required("User DOB is a must."),
  gender: yup.string().required("Gender is a must"),
  province: yup.string().required("A city is required for address"),
  city: yup.string().required("Enter a city"),
  district: yup.string().required("Enter a district"),
  phone_number_one: yup.number().required("A phone number is required"),
  email_one: yup.string().required("An Email is required"),
});

export default userEditSchema;
