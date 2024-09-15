import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTelephone, BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjEzNjItYmctMDJfMS5qcGc.jpg')] bg-cover bg-center text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
        
      </div>

      <ul className="text-sm md:text-xl ">
      <li className="flex gap-1 items-center hover:text-blue-400">
          <BsTelephone size={20} />
         Contact: 9304621008
        </li>
        <li className="flex gap-1 items-center hover:text-blue-400">
          <MdOutlineEmail size={20} />
          singhyuvi0911@gmail.com
        </li>
        <li className="flex gap-1 items-center hover:text-blue-400">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/yuvraaj-singh-701190260/" >
          linkdlin.com/yuvisingh</a>
        </li>
        <li className="flex gap-1 items-center hover:text-blue-400">
          <FaGithub />
          <a href="https://github.com/y-singh09" >
          github.com/y-aingh09</a>
        </li>
        <li className="flex gap-1 items-center hover:text-blue-400">
          <BsTwitterX />
          <a href="https://x.com/Yuvraaj10731328" >
          X/yuvisingh</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
