import React from "react";
import { FaCloudSun, FaGithub, FaRegSun } from "react-icons/fa6";

const getDate = new Date();
const formattedDate = getDate.toLocaleDateString("tr-TR");
const Time = `${getDate.getHours()}:${getDate.getMinutes()} GMT`;

function Header() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center text-white text-3xl">
          <FaCloudSun />
          <span className="text-sm ">
            {formattedDate} {Time}
          </span>
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Header;
