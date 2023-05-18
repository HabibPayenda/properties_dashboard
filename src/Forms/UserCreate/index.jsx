import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./userCreate.module.css";
import { useDispatch } from "react-redux";
import userCreateSchema from "./userCreateSchema";
import { addUser } from "../../data/usersSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import UserImageForm from "./UserImageForm";
import UserDetailsForm from "./UserDetailsForm";
import UserAddressForm from "./UserAddressForm";
import UserContactForm from "./UserContactForm";
import FormPageInfo from "../../components/FormPageInfo";
import FormPaginationBtn from "../../components/FormPaginationBtn";

function UserCreate() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addUser({ ...formik.values, image: image }));
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      date_of_birth: "",
      gender: "",
      province: "",
      city: "",
      district: "",
      phone_number_one: "",
      email_one: "",
    },
    validationSchema: userCreateSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <UserImageForm
        title="Add User Image to the System"
        text="Effortlessly Manage User Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
        setImage={setImage}
      />,
      <UserDetailsForm
        title="Add User Details to the System"
        text="Effortlessly Manage User Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <UserAddressForm
        title="Add User Address Info"
        text="Effortlessly Manage User Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <UserContactForm
        title="Add User Contact Info"
        text="Effortlessly Manage User Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
    ]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidbarHeader}>
          <i className={["fa-solid fa-igloo"]}> </i>
          <h1 className={styles.logoText}>PAPI</h1>
        </div>
        <div className={styles.sidebarStepsContainer}>
          <FormPageInfo
            title="User Image"
            isCurrentPage={true}
            pageNumber={1}
          />
          <FormPageInfo
            title="User Details"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={1}
          />
          <FormPageInfo
            title="User Address"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={2}
          />
          <FormPageInfo
            title="User Contact"
            isCurrentPage={currentPageIndex >= 3}
            pageNumber={3}
          />
        </div>
      </div>
      <div className={styles.formContent}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          {currentPage}
        </form>
        <div className={styles.btnContainer}>
          <FormPaginationBtn title="Previous" onClick={() => previousPage()} />
          <FormPaginationBtn
            title={isLastPage ? "Finish" : "Next"}
            onClick={() => nextPage(formik)}
          />
        </div>
      </div>
    </div>
  );
}

export default UserCreate;
