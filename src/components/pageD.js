import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arithmetic from "./images/arithmetic.jpg";
import basic from "./images/basic.jpg";
import intermidiate from "./images/intermidiate.jpg";
import calculas from "./images/calculas.jpg";
import fourth from "./images/fourth.jpg";

const PageD = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./pageE"); // Replace with the target route path
  };
  const [isBlack, setIsBlack] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOtherButtonClick = () => {
    setIsBlack(true);
    setIsDisabled(false);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <img className="w-90 h-10 mb-10" src={fourth} alt="" />
      <div className="font-mono text-4xl ">
        What is your math comfort level?
      </div>
      <div className="text-gray-600 my-5">
        Choose the hihest level you feel confident in - you can always adjust
        later.
      </div>
      <div class="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <button class="border block items-start justify-start py-2 px-8 transition duration-300 ease-in-out transform hover:shadow-lg">
            <img src={arithmetic} class="h-20 w-30 ml-1"></img>
            <div className="text-gray-800 font-bold">Arithmetic</div>
            <div className="mx-1 text-gray-600">introductory</div>
          </button>
          <button class="border block items-start justify-start py-2 px-8 transition duration-300 ease-in-out transform hover:shadow-lg">
            <img src={basic} class="h-20 w-30 ml-4"></img>
            <div className="text-gray-800 font-bold">Basic Algebra</div>
            <div className="mx-1 text-gray-600">Foundational</div>
          </button>
          <button class="border block items-start justify-start py-2 px-8 transition duration-300 ease-in-out transform hover:shadow-lg">
            <img src={intermidiate} class="h-20 w-30 ml-1"></img>
            <div className="text-gray-800 font-bold">Intermediate Algebra</div>
            <div className="mx-1 text-gray-600">Intermidiate</div>
          </button>
          <button class="border block items-start justify-start py-2 px-8 transition duration-300 ease-in-out transform hover:shadow-lg">
            <img src={calculas} class="h-20 w-30 ml-5"></img>
            <div className="text-gray-800 font-bold">Calculas</div>
            <div className="mx-1 text-gray-600">Advanced</div>
          </button>
        </div>
        <button
          className={`bg-${
            isBlack ? "blue-800" : "gray-300"
          } border py-2 px-10 transition duration-300 ease-in-out transform hover:bg-black hover:text-white rounded-lg mt-5 font-bold`}
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PageD;
