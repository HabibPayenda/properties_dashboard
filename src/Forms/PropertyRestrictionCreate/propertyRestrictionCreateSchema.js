import * as yup from "yup";

const homeAmenityCreateSchema = yup.object().shape({
  name: yup.string().required("Amenity name is a must"),
  description: yup.string().required("Describe you amenity"),
});

export default homeAmenityCreateSchema;
