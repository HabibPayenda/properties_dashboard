import * as yup from "yup";

const homeAmenityCreateSchema = yup.object().shape({
  name: yup.string().required("Amenity name is a must"),
  description: yup.string().required("Describe you amenity"),
  fee: yup.number().required("Amenity fee is a must"),
  fee_duration: yup.string().required("Amenity fee duration is a must"),
});

export default homeAmenityCreateSchema;
