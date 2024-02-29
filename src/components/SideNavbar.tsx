"use client"
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Link from "next/link";

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        
        <div className="p-6 w-1/2 h-screen bg-blue-100 z-20 top-30 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
           
            <div className=" my-8 border-b border-gray-100 pb-4">
            <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href='/application'><h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Application
                </h3></Link>
                
              </div>
              <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href='/announcements'>
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Announcement
                </h3>
                </Link>
                
              </div>
              <div className="flex  mb-8 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <Link href='/feedback'><h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Feedback
                </h3></Link>
                
              </div>
              
             
              
            </div>
           
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;