import React, { useRef } from "react";
import styles from "./formImageSelect.module.css";
import useSelectImage from "../../hooks/useSelectImage";
function FormImageSelect({ title, setImage }) {
  const imageRef = useRef(null);

  const { handleImageChange, imageUrl, setImageUrl } = useSelectImage(
    imageRef,
    setImage
  );

  const handleImageSelect = () => {
    imageRef.current.click();
  };

  const handleImageCancel = () => {
    setImage(null);
    setImageUrl(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl || null} alt="" />
      </div>
      <div className={styles.btnsContainer}>
        <p className={styles.btn} onClick={handleImageCancel}>
          Cancel
        </p>
        <p className={styles.btn} onClick={handleImageSelect}>
          Select
        </p>
        <input
          style={{ display: "none" }}
          onChange={handleImageChange}
          type="file"
          placeholder="Image"
          ref={imageRef}
        />
      </div>
    </div>
  );
}

export default FormImageSelect;
