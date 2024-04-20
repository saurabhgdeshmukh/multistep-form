import React, { useState } from "react";
import mach from "./images/mach.jpg";
const PageG = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOtherButtonClick = () => {
    setIsBlack(true);
    setIsDisabled(false);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="font-mono text-4xl ">Learning paths based on answers</div>
      <div className="text-gray-600 my-5">
        shoose one to get started. You can switch anytime.
      </div>
      <div class="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-5">
          <button class="w-80 h-60 border block justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className=" text-gray-800 font-bold">
                  Foundational Math Build
                </div>
                <div className="mx-1 text-gray-600">
                  your foundational skills in algebra, geometry,and probability.
                </div>
              </div>
              <img src={mach} class="h-21 w-28 mt-5"></img>
            </div>
          </button>
          <button class="w-80 h-60 border block items-start justify-start py-2 px-5 transition duration-300 ease-in-out transform hover:shadow-lg">
            <div className="flex">
              <div className="flex flex-col items-center">
                <div className="text-gray-800 font-bold">
                  Mathematical thinking
                </div>
                <div className="mx-1 text-gray-600">
                  build your foundational skills in algebra, geometry,and
                  probability.
                </div>
              </div>
              <img src={mach} class="h-21 w-28 mt-5"></img>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageG;
