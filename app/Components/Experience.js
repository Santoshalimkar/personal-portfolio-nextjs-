import React from "react";
import Expertimeline from "./Expertimeline";
import Edutimeline from "./Edutimeline";

const Experience = () => {
  return (
    <div className="mt-4 p-8 flex lg:flex-row md:flex-col sm:flex-col flex-col md:ml-28 lg:mx-auto mx-auto justify-around item-center h-auto">
      <div>
        <Edutimeline />
      </div>
      <div className="md:mt-8 lg:mt-0 mt-8">
        <Expertimeline />
      </div>
    </div>
  );
};

export default Experience;
