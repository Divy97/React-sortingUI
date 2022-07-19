import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "../pages/Main";

const App = () => {
  const [size, setSize] = useState(5);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
    console.log("ARRAY", randomArr);
  };

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  const handleChange = (event, newValue) => {
    const range = newValue;
    setSize(range);
  };

  const generateRandomList = () => {
    const sizeOfList = generateRandomInteger(5, 40);
    const randomArr = Array.from({ length: sizeOfList }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };
  return (
    <>
      <Header
        value={size}
        handleChange={handleChange}
        randomList={generateRandomList}
      />
      <Main data={arr} />
    </>
  );
};

export default App;
