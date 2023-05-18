import * as yup from "yup";

const carCreateSchema = yup.object().shape({
  name: yup
    .string()
    .required("A car should have a name")
    .min(4, "Car name must be at least 4 characters long"),
  description: yup
    .string()
    .required("A car should have a description")
    .min(4, "Car name must be at least 4 characters long"),
  availability_status: yup.string().required("Status is a must"),
  property_manager_id: yup.number().required("Property manager is a must"),
  agent_id: yup.number().required("Agent is a must"),
  province: yup.string().required("A province is required for address"),
  city: yup.string().required("Enter a city"),
  district: yup.string().required("Enter a district"),
  deal_type: yup.string().required("Select deal type"),
  duration: yup.number().required("Select deal duration"),
  price_per_duration: yup.number().required("Enter deal price per duration"),
  total_price: yup.number().required("Enter deal total price"),
  total_duration: yup.number().required("Enter deal total duration"),
  brand: yup.string().required("Brand is a must"),
  model: yup.string().required("Model is a must"),
  mile_age: yup.number().required("Enter Car mile age"),
  transmission: yup.string().required("Enter car transmision type"),
  fuel_type: yup.string().required("Enter car fuel type"),
  engine_size: yup.number().required("Enter Car engine size"),
  body_style: yup.string().required("Enter car body style"),
  identity_number: yup.number().required("Enter Car Identity Number"),
});

export default carCreateSchema;
