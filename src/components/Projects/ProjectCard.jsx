import React from "react";
import styled from 'styled-components';


const ProjectCard = ({ title, main,img,demoClick,sourceClick}) => {

  return (
   <div className="p-5 m-8 md:p-6 flex flex-col w-80 bg-blue-300 bg-opacity-30 shadow-xl shadow-slate-900 rounded-2xl hover:opacity-85 duration-300 hover:scale-110 backdrop-blur-sm">
  <img className="p-4" src={img} alt={title} />
  <h3 className="px-3 text-black text-xl md:text-2xl font-bold leading-normal">
    {title}
  </h3>
      <p className="px-4 text-black text-sm md:text-md leading-tight py-2 max-h-16 overflow-hidden transition-all duration-300 hover:max-h-screen hover:overflow-auto">
  {main}
</p>
      <div className="mt-2 p-2 md:p-1 flex gap-1 md:gap-4">
      <button onClick={demoClick} className="md:mt-10 text-white py-3 px-5 text-base md:text-xl md:py-2 md:px-4 hover:bg-blue-600 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-purple-700">
  Demo
</button>

        <button onClick={sourceClick} className="md:mt-10 text-white py-2 px-3 text-sm md:text-md md:py-2 md:px-6 hover:opacity-85 duration-300 hover:bg-blue-600 hover:scale-105 font-bold rounded-3xl bg-purple-700">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
