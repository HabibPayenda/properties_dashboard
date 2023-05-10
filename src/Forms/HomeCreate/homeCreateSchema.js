import * as yup from "yup";

const homeCreateSchema = yup.object().shape({
  owner_name: yup
    .string()
    .required("A property should have an owner")
    .min(4, "Owner name must be at least 4 characters long"),
  name: yup
    .string()
    .required("A home should have a name")
    .min(4, "Home name must be at least 4 characters long"),
  description: yup
    .string()
    .required("A home should have a description")
    .min(4, "Home name must be at least 4 characters long"),
  availability_status: yup.string().required("Staus is a must"),
  property_manager_id: yup.number().required("Property manager is a must"),
  agent_id: yup.number().required("Agent is a must"),
  province: yup.string().required("A city is required for address"),
  city: yup.string().required("Enter a city"),
  district: yup.string().required("Enter a district"),
  deal_type: yup.string().required("Enter deal type"),
  duration: yup.number().required("Enter deal duration"),
  price_per_duration: yup.number().required("Enter deal price per duration"),
  total_price: yup.number().required("Enter deal total price"),
  total_duration: yup.number().required("Enter deal total duration"),
});

export default homeCreateSchema;
