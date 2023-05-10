import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./homeRoomCreate.module.css";
import { addHomeRoom } from "../../data/homeSlice";
import useMultistepForm from "../../hooks/useMultistepForm";
import FormPaginationBtn from "../../components/FormPaginationBtn";
import FormPageInfo from "../../components/FormPageInfo";
import homeRoomEditSchema from "./homeRoomEditSchme";
import HomeRoomDetailsEditForm from "./HomeRoomDetailsEditForm";

function HomeRoomCreate({ id }) {
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    console.log("clicked");
    dispatch(addHomeRoom({ ...formik.values, home_id: id }));
    // formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      width: "",
      length: "",
      windows: "",
      cup_board: "",
      to_sun: "",
      color: "",
    },
    validationSchema: homeRoomEditSchema,
    onSubmit: handleFormSubmit,
  });

  const { currentPage, isLastPage, nextPage, previousPage, currentPageIndex } =
    useMultistepForm([
      <HomeRoomDetailsEditForm
        title="Add New Room to this home"
        text="Effortlessly Manage Home Information: Perfecting Your Team's Efficiency!"
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
            title="Home Room Details"
            isCurrentPage={true}
            pageNumber={1}
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

export default HomeRoomCreate;
