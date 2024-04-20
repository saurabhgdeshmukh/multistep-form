import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import learning from "./images/learning.jpg";
import exploring from "./images/exploring.jpg";
import refreshing from "./images/refreshing.jpg";
import exercising from "./images/exercising.jpg";
import something from "./images/something.jpg";
import second from "./images/second.jpg";
const PageB = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("pageC"); // Replace with the target route path
  };
  const [isBlack, setIsBlack] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOtherButtonClick = () => {
    setIsBlack(true);
    setIsDisabled(false);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <img className="w-90 h-10 mb-10" src={second} alt="" />
      <div className="font-mono text-4xl ">
        Which are you most interested in?
      </div>
      <div className="text-gray-600 my-5">
        Choose just one. This will help us get you started (but won't limit your
        experience)
      </div>
      <div class="grid gap-4">
        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={learning} class="h-6 w-6 mr-2"></img>
          <div className="text-gray-800 font-bold">
            Learning specific skills to advance my career
          </div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={exploring} class="h-6 w-6 mr-2"></img>
          <div className="text-gray-800 font-bold">
            Exploring new topics im interested in
          </div>
          <div className="mx-1 text-gray-600">pursuing a career</div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={refreshing} class="h-6 w-6 mr-2"></img>
          <div className="text-gray-800 font-bold">
            Refreshing my math foundations
          </div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={exercising} class="h-6 w-6 mr-2"></img>
          <div className="text-gray-800 font-bold">
            Exercising my brain to stay sharp
          </div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={something} class="h-6 w-6 mr-2"></img>
          <div className="text-gray-800 font-bold">Something else</div>
        </button>
      </div>
      <div>
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

export default PageB;
