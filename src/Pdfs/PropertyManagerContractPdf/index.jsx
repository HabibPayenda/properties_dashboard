import React, { useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#E4E4E4",
    width: "100vw",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PropertyManagerContractPdf = () => {
  return (
    <Document>
      <Page>
        <View>
          <Text>Hello World! in PDF</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PropertyManagerContractPdf;
