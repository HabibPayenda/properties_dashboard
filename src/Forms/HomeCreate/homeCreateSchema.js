import * as yup from 'yup';

const homeCreateSchema = yup.object().shape({
  owner_name: yup.string().required("A property should have an owner").min(4, "Owner name must be at least 4 characters long"),
  name: yup.string().required("A home should have a name").min(4, "Home name must be at least 4 characters long"),
  description: yup.string().required("A home should have a description").min(4, "Home name must be at least 4 characters long"),
  availability_status: yup.string().required("Staus is a must"),
  property_manager_id: yup.number().required("Property manager is a must"),
  agent_id: yup.number().required("Agent is a must")
})

export default homeCreateSchema;