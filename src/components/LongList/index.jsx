import React from "react";
import styles from "./longList.module.css";
import LongListItem from "../LongListItem";
import LongListBtn from "../LongListBtn";
import LongListSearchBox from "../LongListSearchBox";

function LongList({ data }) {
  let columnsCount = 0;
  const columnNames = [];
  if (data.length) {
    for (let item in data[0]) {
      if (item == "created_at" || item == "updated_at") {
        continue;
      }
      columnNames.push(item);
      columnsCount += 1;
    }
  }
  const renderItems = () => {
    let items = [];
    if (data.length) {
      data?.map((item) => {
        console.log("in map");
        for (let cur in item) {
          if (cur == "created_at" || cur == "updated_at") {
            continue;
          }
          items.push(<LongListItem key={item.name} item={item[cur]} />);
        }
        items.push(<LongListBtn />);
      });
    }
    return items;
  };

  return (
    <div className={styles.container}>
      <LongListSearchBox />
      <div
        className={styles.listHeader}
        style={{
          gridTemplateColumns: `repeat(${columnsCount + 1}, ${
            100 / (columnsCount + 1)
          }%)`,
        }}
      >
        {columnNames?.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div
        className={styles.listBody}
        style={{
          gridTemplateColumns: `repeat(${columnsCount + 1}, ${
            100 / (columnsCount + 1)
          }%)`,
          gridTemplateRows: `repeat(${data.length}, 30px)`,
        }}
      >
        {renderItems()}
      </div>
    </div>
  );
}

export default LongList;
