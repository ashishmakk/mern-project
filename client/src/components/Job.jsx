import React from "react";
import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";

function Job({ company, position, jobLocation, jobType, createdAt, jobStatus }) {
  
  
  return <article className="bg-[#f2f2f2] p-4 lg:p-6 shadow-md rounded ">
    <header className="flex gap-x-4 items-center">
    <div className=" uppercase bg-[#909090] rounded flex justify-center items-center text-[#f2f2f2] text-2xl lg:text-3xl font-bold w-12 h-12 lg:w-16 lg:h-16">
      {company.charAt(0)}</div>
      <div>
    <h4 className="font-medium">{company}</h4>
     <p className="capitalize text-[#535353]">{position}</p>
      </div>
    </header>
    <div className="mt-4 lg:mt-6 grid lg:grid-cols-2 gap-y-4">
    <p className="flex items-center text-lg gap-x-3 capitalize"><span><FaLocationArrow /></span>
    {position}</p>
    <p className="flex items-center text-lg gap-x-3 capitalize"><span><FaCalendarAlt /></span>
    {jobLocation}</p>
    <p className='flex items-center rounded justify-center bg-[#b0b6f5] text-lg py-2 capitalize w-28'>
    {jobStatus}</p>
    </div>
    <p></p>
  </article>;
}

export default Job;
