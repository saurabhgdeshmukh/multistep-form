import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import student from "./images/student.jpg";
import professional from "./images/professional.jpg";
import parent from "./images/parent.jpg";
import learner from "./images/learner.jpg";
import teacher from "./images/teacher.jpg";
import other from "./images/other.jpg";
import first from "./images/first.jpg";

const PageA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("pageB"); // Replace with the target route path
  };
  const [isBlack, setIsBlack] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOtherButtonClick = () => {
    setIsBlack(true);
    setIsDisabled(false);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <img className="w-90 h-10 mb-10" src={first} alt="" />
      <div className="font-mono text-4xl ">Which describes you best?</div>
      <div className="text-gray-600 my-5">
        This will help us personalize your experience.
      </div>
      <div class="grid gap-4">
        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={student} class="h-7 w-7 mr-4"></img>
          <div className="text-gray-800 font-bold">Student</div>
          <div className="mx-1 text-gray-600">or soon to be enrolled</div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={professional} class="h-7 w-7 mr-4"></img>
          <div className="text-gray-800 font-bold">Professional</div>
          <div className="mx-1 text-gray-600">pursuing a career</div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={parent} class="h-6 w-6 mr-4"></img>
          <div className="text-gray-800 font-bold">Parent</div>
          <div className="mx-1 text-gray-600">of a school- age child</div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={learner} class="h-6 w-6 mr-4"></img>
          <div className="text-gray-800 font-bold">Lifelong learner</div>
        </button>

        <button class="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg">
          <img src={teacher} class="h-6 w-6 mr-4"></img>
          <div className="text-gray-800 font-bold">Teacher</div>
        </button>

        <button
          className="border flex items-start justify-start py-2 px-10 transition duration-300 ease-in-out transform hover:shadow-lg"
          onClick={handleOtherButtonClick}
        >
          <img src={other} className="h-6 w-6 mr-4" alt="" />
          <div className="text-gray-800 font-bold">Other</div>
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

export default PageA;
