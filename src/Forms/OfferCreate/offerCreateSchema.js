import * as yup from "yup";

const offerCreateSchema = yup.object().shape({
  start_date: yup.date().required("start data is required"),
  end_date: yup.date().required("start data is required"),
  title: yup.string().required("Agent status is a must"),
  description: yup.string().required("Description is required for address"),
  offer_price: yup.number().required("Offer price is required"),
  deal_info_id: yup.number().required("Deal Info Id is required"),
  property_id: yup.number().required("Property Id is required"),
});

export default offerCreateSchema;

// t.date "start_date"
//     t.date "end_date"
//     t.string "title"
//     t.text "description"
//     t.bigint "deal_info_id", null: false
//     t.integer "offer_price"
//     t.bigint "property_id", null: false
