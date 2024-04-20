import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import calculas from "./images/page-5.png";
import last from "./images/last.jpg";
const PageE = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./pageF"); // Replace with the target route path
  };
  const [isBlack, setIsBlack] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOtherButtonClick = () => {
    setIsBlack(true);
    setIsDisabled(false);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img className="w-90 h-10 mb-10" src={last} alt="" />
      <div className="flex justify-center items-center">
        <img className="w-90 h-60 mx-10" src={calculas} alt="" />
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl ">You're on your way!</div>
          <div className="text-gray-800 mt-5 italic">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </div>
          <div className="text-gray-800 italic">- Jacob S.</div>
        </div>
      </div>
      <button
        className={
          "bg-isBlack border py-2 px-10 transition duration-300 ease-in-out transform hover:bg-black hover:text-white rounded-lg mt-5 font-bold"
        }
        onClick={handleClick}
      >
        Continue
      </button>
    </div>
  );
};

export default PageE;
