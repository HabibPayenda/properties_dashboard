import * as yup from "yup";

const AppointmentCreateSchema = yup.object().shape({
  status: yup.string().required("Status is required"),
  notes: yup.string().required("Notes is required"),
  user_id: yup.string().required("User Id is required"),
  property_id: yup.string().required("Property ID is required"),
  agent_id: yup.number().required("Agent is a must"),
  start: yup.date().required("Start date is required"),
  end: yup.date().required("End date is required"),
});

export default AppointmentCreateSchema;
