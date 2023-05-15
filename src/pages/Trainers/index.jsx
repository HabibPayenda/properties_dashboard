import { PDFViewer, BlobProvider, usePDF } from "@react-pdf/renderer";
import React from "react";
import PropertyManagerContractPdf from "../../Pdfs/PropertyManagerContractPdf";
import styles from "./trainers.module.css";

function Trainers() {
  const [instance] = usePDF({ document: PropertyManagerContractPdf });
  console.log(instance);
  return (
    <div className={styles.container}>
      <PropertyManagerContractPdf />
    </div>
  );
}

export default Trainers;
