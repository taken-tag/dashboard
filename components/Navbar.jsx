import React, { useState } from "react";
import Hamburger from "../Icons/Hamburger";
import Wallet from "../Icons/Wallet";
import { useRouter } from 'next/router'
import Avatar from "../Icons/Avatar";
import Download from "../Icons/Download";
import Password from "../Icons/Password";
import Logout from "../Icons/Logout";
import Logo from "./Logo";
export default function Navbar({ showMenu, setShowMenu, showUserData }) {
  const router = useRouter()
  function LogoutUser() {
    localStorage.removeItem("userData")
    router.push("/")
  }

  const desktoplogo = "w-[150px] hidden  md:block  h-[75px] object-contain";
  return (
    <>
      <div className="NavbarDashboard bg-[#1b1d1c] flex items-center justify-between p-3 h-[70px] top-[0px]  fixed w-[100%] z-40">
        <div className="logoBox md:w-[220px]    flex items-center justify-between">
          <Logo style={desktoplogo} />
          <div
            className="hamburgerMenu text-white cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Hamburger />
          </div>
        </div>

        <div className="Profile_account_details flex items-center">
          <div className="balance text-white font-medium w-fit-content  px-3 flex items-center">
            <div className="mx-2 bg-[#3b3e3c] rounded-md w-[34px] h-[34px] flex items-center justify-center">
              <Wallet />
            </div>
            <span className="p-0 m-0 text-sm">$12300</span>
          </div>

          <div className="profileDetails flex items-center justify-center w-fit relative">
            <div className="border-2 rounded-md border-[#3b3e3c] mx-2">
              <img
                src={showUserData?.profile_photo_url}
                alt="navavtar"
                className="w-[34px] h-[34px] object-contain"
              />
            </div>
            <div className="name_email leading-[12px] text-white ">
              <p className="p-0 m-0 text-sm">{showUserData?.name}</p>
              <small className="text-xs">{showUserData?.email}</small>
            </div>

            <div className="absolute logoutbtn top-0 bg-transparent w-[100%] h-[180px]  justify-center  left-2 rounded-md p-2">
              <div className="bg-[#282828] mt-10 w-[100%] ">
                <p className="text-[#bdbdbd] flex items-center my-1">
                  <Avatar /> My Profile
                </p>
                <p className="text-[#bdbdbd]  flex items-center my-1">
                  <Download /> Download
                </p>
                <p className="text-[#bdbdbd]  flex items-center my-1">
                  <Password />
                  Chage Password
                </p>
                <p 
                className="text-[#bdbdbd] cursor-pointer flex items-center my-2 py-2 border-t-2 border-gray-300"
                onClick={LogoutUser}
                >
                  <Logout />
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // LeftSide */}
    </>
  );
}
