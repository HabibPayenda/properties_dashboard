import * as yup from 'yup';

const agentCreateSchema = yup.object().shape({
  name: yup.string().required("An agent should have a name").min(4, "Agent name must be at least 4 characters long"),
  hire_date: yup.date().required("Agent hire date is a must"),
  status: yup.string().required("Agent status is a must"),
  admin_id: yup.number().required("Agent admin is a must")
})

export default agentCreateSchema;