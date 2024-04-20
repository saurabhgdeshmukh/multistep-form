import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pulley from "./images/pulley.jpg";
import third from "./images/third.jpg";
const PageC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./pageD"); // Replace with the target route path
  };
  const [isBlack, setIsBlack] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOtherButtonClick = () => {
    setIsBlack(true);
    setIsDisabled(false);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img className="w-90 h-10 mb-10" src={third} alt="" />
      <div className="flex">
        <img src={pulley} class="h-60 w-25"></img>
        <div className="flex flex-col justify-center items-center ml-20">
          <div className="text-4xl ">You're in the right place </div>
          <div className="text-gray-800 mt-5 h-30 w-80">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </div>
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

export default PageC;
