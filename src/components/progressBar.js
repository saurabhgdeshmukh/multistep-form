import React, { useState } from "react";

const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const updateSteps = (step) => {
    setCurrentStep(step);
  };

  const handleButtonClick = (step) => {
    updateSteps(step);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((stepNumber) => (
            <span key={stepNumber}>
              {stepNumber > 1 && <div className="line"></div>}
              <span
                className={`step-circle ${
                  stepNumber === currentStep ? "active" : ""
                }`}
              >
                {stepNumber}
              </span>
            </span>
          ))}
          <div className="progress-bar-container">
            <span
              className="progress-indicator"
              style={{
                width: `${((currentStep - 1) / 3) * 100}%`,
              }}
            ></span>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            id="prev"
            disabled={currentStep === 1}
            onClick={() => handleButtonClick(currentStep - 1)}
            className="btn-prev-next"
          >
            Prev
          </button>
          <button
            id="next"
            disabled={currentStep === 4}
            onClick={() => handleButtonClick(currentStep + 1)}
            className="btn-prev-next"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStep;
