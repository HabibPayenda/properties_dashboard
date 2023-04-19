import React, { useState } from "react";
import TextInput from "../TextInput";

import styles from "./longListSearchBox.module.css";

function LongListSearchBox() {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <div className={styles.container}>
      <TextInput
        value={searchTerm}
        onChange={setSearchTerm}
        label={"Type a name to search:"}
        className={styles.input}
        containerClassName={styles.containerClass}
        placeholder="Agent Name"
      />
    </div>
  );
}

export default LongListSearchBox;
