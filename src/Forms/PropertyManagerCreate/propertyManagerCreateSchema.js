import * as yup from 'yup';

const propertyManagerCreateSchema = yup.object().shape({
  name: yup.string().required("A property manager should have a name").min(4, "Property Manager name must be at least 4 characters long"),
  company_name: yup.string().required("Company name is a must"),
  status: yup.string().required("Property manager status is a must"),
  agent_id: yup.number().required("Property agent is a must")
})

export default propertyManagerCreateSchema;