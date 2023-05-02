import * as yup from "yup";

const homeRoomCreateSchema = yup.object().shape({
  width: yup.number().required("Width is a must"),
  length: yup.number().required("Length is a must"),
  windows: yup.number().required("Specify room windows"),
  to_sun: yup.boolean().required("Does the room have sun?"),
  cup_board: yup.boolean().required("Does the room have cup board?."),
  color: yup.string().required("Color is a must"),
});

export default homeRoomCreateSchema;
