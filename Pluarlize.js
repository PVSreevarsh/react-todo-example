import React from "react";

const Pluarlize = ({ itemList, word }) => {
  let displayWord = `${word}s`;
  if (itemList.length === 1) {
    displayWord = word;
  }
  return (
    <>
       {displayWord}
    </>
  );
};

export default Pluarlize;
