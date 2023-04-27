import React from "react";

function PropertiesSummary({ properties }) {
  return (
    <div>
      <p>Properties count:{properties?.length}</p>
    </div>
  );
}

export default PropertiesSummary;
