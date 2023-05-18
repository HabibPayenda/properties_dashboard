import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./userEditForm.module.css";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../data/usersSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPageInfo from "../../components/FormPageInfo";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import UserImageEditForm from "./UserImageEditForm";
import UserDetailsEditForm from "./UserDetailsEditForm";
import UserAddressEditForm from "./UserAddressEditForm";
import UserContactEditForm from "./UserContactEditForm";
import userEditSchema from "./userEditSchema";

function UserEditForm({ user }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(user?.image_url);

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(updateUser({ ...formik.values, image: image, user_id: user?.id }));
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      password: user?.password,
      date_of_birth: user?.date_of_birth,
      gender: user?.gender,
      province: user?.address?.province,
      city: user?.address?.city,
      district: user?.address?.district,
      phone_number_one: user?.contact?.phone_number_one,
      email_one: user?.contact?.email_one,
    },
    validationSchema: userEditSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <UserImageEditForm
        title="Edit User Image to the System"
        text="Effortlessly Manage User Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
        setImage={setImage}
        image_url={user?.image_url}
      />,
      <UserDetailsEditForm
        title="Edit User Details to the System"
        text="Effortlessly Manage User Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <UserAddressEditForm
        title="Edit User Address Info"
        text="Effortlessly Manage User Information: Perfecting Your Team's Efficiency!"
        formik={formik}
        styles={styles}
      />,
      <UserContactEditForm
        title="Edit User Contact Info"
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
            title="Edit User Image"
            isCurrentPage={true}
            pageNumber={1}
          />
          <FormPageInfo
            title="Edit User Details"
            isCurrentPage={currentPageIndex >= 1}
            pageNumber={1}
          />
          <FormPageInfo
            title="Edit User Address"
            isCurrentPage={currentPageIndex >= 2}
            pageNumber={2}
          />
          <FormPageInfo
            title="Edit User Contact"
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

export default UserEditForm;
