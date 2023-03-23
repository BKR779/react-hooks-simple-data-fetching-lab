// create your App component here

import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
      });
  }, []);

  //   if (!image) return <p>Loading...</p>; // when the component is first rendered

  return (
    <>{image ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>}</>
  );
}

export default App;