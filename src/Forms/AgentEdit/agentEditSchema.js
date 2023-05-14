import * as yup from "yup";

const agentEditSchema = yup.object().shape({
  name: yup
    .string()
    .required("An agent should have a name")
    .min(4, "Agent name must be at least 4 characters long"),
  hire_date: yup.date().required("Agent hire date is a must"),
  status: yup.string().required("Agent status is a must"),
  admin_id: yup.number().required("Agent admin is a must"),
  province: yup.string().required("A city is required for address"),
  city: yup.string().required("Enter a city"),
  district: yup.string().required("Enter a district"),
  phone_number_one: yup.number().required("A phone number is required"),
  email_one: yup.string().required("An Email is required"),
});

export default agentEditSchema;
