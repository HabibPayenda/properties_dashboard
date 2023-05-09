import React from "react";

function ModalLink({ title, onClick }) {
  return (
    <div onClick={onClick}>
      <i class="fa-solid fa-plus"></i> {title}
    </div>
  );
}

export default ModalLink;
