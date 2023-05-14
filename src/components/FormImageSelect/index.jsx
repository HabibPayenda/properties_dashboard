import React, { useRef } from "react";
import styles from "./formImageSelect.module.css";
import useSelectImage from "../../hooks/useSelectImage";
function FormImageSelect({ title, setImage }) {
  const imageRef = useRef(null);

  const { handleImageChange, imageUrl } = useSelectImage(imageRef, setImage);

  return (
    <div className={styles.container}>
      <img
        style={{ height: "100px", width: "100px" }}
        src={imageUrl || null}
        alt=""
      />
      <input
        onChange={handleImageChange}
        type="file"
        placeholder="Image"
        ref={imageRef}
      />
    </div>
  );
}

export default FormImageSelect;
