import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

          <ul className="text-sm md:text-xl space-y-2">
      <li>
        <a 
          href="mailto:Hoangthangx00@gmail.com"
          className="flex gap-2 items-center text-white hover:opacity-80 transition"
        >
          <MdOutlineEmail size={20} />
          Hoangthangx00@gmail.com
        </a>
      </li>
      <li>
        <a 
          href="https://zalo.me/0906332424"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-white hover:opacity-80 transition"
        >
          <SiZalo size={22} />
          0906332424
        </a>
      </li>
      <li>
        <a 
          href="https://github.com/TranHoangThang"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-white hover:opacity-80 transition"
        >
          <FaGithub size={22} />
          github.com/TranHoangThang
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Footer;
