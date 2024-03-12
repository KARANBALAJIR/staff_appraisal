"use client";
import React, { useState } from "react";

const GeneralInfo = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="container mx-auto mt-7 ">
        <div className="mb-9">
          <div className="text-center mb-4 font-bold overflow-x">
            <h1>Faculty Members Performance Appraisal Form - Professor</h1>
            <h6>
              (All Parameters in the Appraisal form are considered during
              Assessment Period Only)
            </h6>
          </div>
          <div>
            <div className="ml-6 mb-3 flex">
              <h1>Name</h1>
              <input
                type="text"
                placeholder="Enter Name"
                className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="ml-6 mb-3 flex">
              <h1>Department</h1>
              <input
                type="text"
                placeholder="Enter Department"
                className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="ml-6 mb-3 flex">
              <h1>Designation(at the time of joining)</h1>
              <input
                type="text"
                placeholder="Enter Designation"
                className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="ml-6 mb-3 flex">
              <h1>Qualifications</h1>
              <input
                type="text"
                placeholder="Enter Qualifications"
                className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="ml-6 mb-3 flex">
              <h1>Current Designation</h1>
              <input
                type="text"
                placeholder="Enter Current Designation"
                className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <h1 className="ml-6 mb-3 flex font-bold">
              No of years Teaching experience
            </h1>
            <div className="flex">
              <div className="ml-6 mb-3 flex">
                <h1>in other colleges</h1>
                <input
                  type="text"
                  placeholder="Enter Experience"
                  className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="ml-20 mb-3 flex">
                <h1>in SECE</h1>
                <input
                  type="text"
                  placeholder="Enter Experience"
                  className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <h1 className="ml-6 mb-3 flex font-bold">
              No of Years of Experience (Others)
            </h1>
            <div className="flex">
              <div className="ml-6 mb-3 flex">
                <h1>Industry</h1>
                <input
                  type="text"
                  placeholder="Enter Experience"
                  className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="ml-20 mb-3 flex">
                <h1>Polytechnic</h1>
                <input
                  type="text"
                  placeholder="Enter Experience"
                  className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="ml-20 mb-3 flex">
                <h1>School</h1>
                <input
                  type="text"
                  placeholder="Enter Experience"
                  className="ml-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <h1 className="ml-6 mb-3 flex font-bold italic">
              (Note: All the data to be furnished in this form should pertain to
              the period 1st April 2022 to 31st March 2023)
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
