import { useState } from "react";

function useSelectImage(imageRef, setImage) {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = () => {
    const file = imageRef.current.files[0];
    setImage(imageRef.current.files[0]);

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImageUrl(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return {
    imageUrl,
    setImageUrl,
    handleImageChange,
  };
}

export default useSelectImage;
