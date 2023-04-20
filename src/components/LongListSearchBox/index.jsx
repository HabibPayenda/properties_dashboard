import React, { useState } from "react";
import TextInput from "../TextInput";

import styles from "./longListSearchBox.module.css";

function LongListSearchBox({ dataToRender, setDataToRender }) {
  let data = [];
  if (dataToRender.length) {
    data = [...dataToRender];
  }
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    data = data.filter((item) => {
      return item.name.includes(searchTerm);
    });
    setDataToRender(data);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  return (
    <div className={styles.container}>
      <TextInput
        value={searchTerm}
        onChange={handleChange}
        label={"Type a name to search:"}
        className={styles.input}
        containerClassName={styles.containerClass}
        placeholder="Agent Name"
      />
    </div>
  );
}

export default LongListSearchBox;
