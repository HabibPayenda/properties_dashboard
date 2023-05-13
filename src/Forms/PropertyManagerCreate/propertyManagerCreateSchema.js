import * as yup from "yup";

const propertyManagerCreateSchema = yup.object().shape({
  name: yup
    .string()
    .required("A property manager should have a name")
    .min(4, "Property Manager name must be at least 4 characters long"),
  company_name: yup.string().required("Company name is a must"),
  status: yup.string().required("Property manager status is a must"),
  agent_id: yup.number().required("Property agent is a must"),
  province: yup.string().required("A city is required for address"),
  city: yup.string().required("Enter a city"),
  district: yup.string().required("Enter a district"),
  phone_number_one: yup.number().required("A phone number is required"),
  email_one: yup.string().required("An Email is required"),
});

export default propertyManagerCreateSchema;
