import * as yup from "yup";

const landCreateSchema = yup.object().shape({
  area: yup.number().required("Enter land area in squre meter"),
  zone: yup.string().required("Enter land zone"),
  current_use: yup.string().required("Enter land current use"),
  name: yup
    .string()
    .required("A land should have a name")
    .min(4, "Land name must be at least 4 characters long"),
  description: yup
    .string()
    .required("A home should have a description")
    .min(4, "Home name must be at least 4 characters long"),
  availability_status: yup.string().required("Staus is a must"),
  property_manager_id: yup.number().required("Property manager is a must"),
  agent_id: yup.number().required("Agent is a must"),
  province: yup.string().required("A province is required for address"),
  city: yup.string().required("Enter a city"),
  district: yup.string().required("Enter a district"),
  deal_type: yup.string().required("Enter deal type"),
  duration: yup.number().required("Enter deal duration"),
  price_per_duration: yup.number().required("Enter deal price per duration"),
  total_price: yup.number().required("Enter deal total price"),
  total_duration: yup.number().required("Enter deal total duration"),
});

export default landCreateSchema;

// t.integer 'area'
// t.string 'zone'
// t.string 'current_use'
// t.datetime 'created_at', null: false
// t.datetime 'updated_at', null: false
// t.bigint 'property_id', null: false
