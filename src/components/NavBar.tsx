import React, { useState } from "react";
import logo from "../assets/logo.svg";
import notifIcon from "../assets/notifIcon.svg";
import SignUpBanner from "./SignUpBanner";

const NavBar: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex bg-white py-5 w-screen border-1 justify-between items-center relative">
      <div className="sm:ml-2">
        <img src={logo} className="w-[166.5px] h-[41px] sm:px-15 md:px-15 py-1 ml-20 " alt="Logo" />

      </div>
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={notifIcon}
          className="h-[24px] w-[24px] sm:hidden mr-8"
          alt="Notification Icon"
        />
        {isHovered && (
          <div className="absolute right-0 mt-2 mr-5 sm:hidden">
            <div className="flex rounded-md w-64 h-44 mt-5">
              <SignUpBanner />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
