import { useFormik } from "formik";
import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import FormSelect from "../../components/FromSelect";
import { useDispatch, useSelector } from "react-redux";
import FormBtn from "../../components/FormBtn";
import { addAppointment } from "../../data/appointmentSlice";
import AppointmentCreateSchema from "./appointmentCreateSchema";
import styles from "./appointmentCreate.module.css";

function AppointmentCreate() {
  const homes = useSelector((state) => state.homes.homes);
  const agents = useSelector((state) => state.agents.agents);
  const users = useSelector((state) => state.users.users);

  const isAppointmentAdded = useSelector((state) => state.appointments.added);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    try {
      dispatch(addAppointment(formik.values));
      formik.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      status: "",
      notes: "",
      user_id: "",
      property_id: "",
      agent_id: "",
      start: "",
      end: "",
    },
    validationSchema: AppointmentCreateSchema,
    onSubmit: handleFormSubmit,
  });

  // const handleSelectChange = (value) => {
  //   console.log(value);
  //   formik.handleChange(value);
  // };

  console.log(formik.values);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Appointment</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <FormSelect
          id="status"
          value={formik.values.status}
          label="Status:"
          titles={["Pending", "Done", "Canceled"]}
          values={["pending", "done", "canceled"]}
          errors={formik.errors.status}
          touched={formik.touched.status}
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
          isSubmitting={formik.isSubmitting}
          formSubmitted={isAppointmentAdded}
        />

        <TextInput
          label="Notes:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Appointment Notes"
          className={styles.input}
          value={formik.values.notes}
          id="notes"
          type="text"
          errors={formik.errors.notes}
          touched={formik.touched.notes}
        />

        <FormSelect
          value={formik.values.user_id}
          label="User:"
          titles={users.map((user) => user.name)}
          values={users.map((user) => user.id)}
          errors={formik.errors.user_id}
          touched={formik.touched.user_id}
          id="user_id"
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
          formSubmitted={isAppointmentAdded}
        />

        <FormSelect
          value={formik.values.agent_id}
          label="Agent:"
          titles={agents.map((agent) => agent.name)}
          values={agents.map((agent) => agent.id)}
          errors={formik.errors.agent_id}
          touched={formik.touched.agent_id}
          id="agent_id"
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
          formSubmitted={isAppointmentAdded}
        />

        <FormSelect
          value={formik.values.property_id}
          label="Property:"
          titles={homes.map((home) => home.owner_name)}
          values={homes.map((home) => home.id)}
          errors={formik.errors.property_id}
          touched={formik.touched.property_id}
          id="property_id"
          setFieldValue={formik.setFieldValue}
          setFieldTouched={formik.setFieldTouched}
          formSubmitted={isAppointmentAdded}
        />

        <TextInput
          label="Start:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          value={formik.values.start}
          id="start"
          type="datetime-local"
          errors={formik.errors.start}
          touched={formik.touched.start}
        />
        <TextInput
          label="End:"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          value={formik.values.end}
          id="end"
          type="datetime-local"
          errors={formik.errors.end}
          touched={formik.touched.end}
        />

        <FormBtn
          title="Create"
          onClick={formik.handleSubmit}
          loading={isAppointmentAdded}
        />
      </form>
    </div>
  );
}

export default AppointmentCreate;
