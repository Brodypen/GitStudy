"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Dashboard = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col bg-gradient-radial from-[#19181C] to-[#161518]">
      <div className="w-full bg-gradient-radial from-[#19181C] to-[#161518] text-white p-4 text-3xl ml-4 font-bold flex justify-between items-center">
        GitStudy
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
      </div>
      <div className="flex flex-grow">
        <div className="w-64 bg-gradient-radial from-[#19181C] to-[#161518] text-white p-4 flex flex-col border-r border-t border-[#393939]">
          <p className="text-xl ml-4 my-6 font-bold">Study Groups</p>
          <Link href="/" passHref>
            <div className="flex items-center mb-4 pl-4 py-1 bg-transparent text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold">
              <Image src="/bullet.svg" alt="bullet" width={15} height={15} />
              <div className="cursor-pointer ml-2">Most Popular</div>
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="flex items-center mb-4 pl-4 py-1 bg-transparent text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold">
              <Image src="/bullet.svg" alt="bullet" width={15} height={15} />
              <div className="cursor-pointer ml-2">Favorites</div>
            </div>
          </Link>
          <Link href="/login" passHref>
            <div className="flex items-center mb-4 pl-4 py-1 bg-transparent text-white opacity-75 hover:bg-[#3A3454] rounded hover:opacity-100 hover:font-bold active:bg-[#3A3454] active:opacity-100 active:font-bold">
              <Image src="/bullet.svg" alt="bullet" width={15} height={15} />
              <div className="cursor-pointer ml-2">My Groups</div>
            </div>
          </Link>
          {/* Add more links for other pages within the dashboard here */}
        </div>
        <main className="flex-1 p-4 border-t border-l border-[#393939]">
          <div className="flex justify-between items-center">
            <p className="text-3xl jersey-25 my-6 ml-6 font-bold">
              Popular Study Groups
            </p>
            <div className="relative mr-2">
              <input
                type="search"
                placeholder="Search Study Groups"
                className="border-2 border-[#393939] bg-transparent h-10 px-2 pr-10 rounded text-sm focus:outline-none w-full"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 rounded h-full w-10 bg-[#15EDA3] flex items-center justify-center"
                title="Toggle Click"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-search text-[#161518]"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
          <p className="ml-6 text-[#CCCCCC]">
            Find study groups that suit your necessities to improve your
            academic knowledge.
          </p>
          <div className="grid grid-cols-5 gap-2 mt-6 ml-6">
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#161518] border-[#393939] border rounded-2xl shadow-md p-4 flex flex-col items-start space-y-1"
                >
                  <Image
                    src="/placeholder.jpg"
                    alt="General Image"
                    width={1000}
                    height={80}
                    className="object-cover rounded-2xl w-full"
                  />
                  <div className="flex justify-between w-full">
                    <Image
                      src="/book.svg"
                      alt="Book Icon"
                      width={12}
                      height={12}
                    />
                    <span className="bg-[#3A3454] text-white text-xs px-1 py-0.5 mt-1 rounded">
                      Joined
                    </span>
                  </div>
                  <h2 className="text-md font-bold">Course Name</h2>
                  <p className="text-xs text-gray-500">Small description...</p>
                  <button
                    onClick={() => setIsClicked(!isClicked)}
                    className={`p-1 rounded-full border-[#393939] self-end`}
                    title="Toggle Click"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={isClicked ? "#15EDA3" : "#393939"}
                      stroke={isClicked ? "#15EDA3" : "#393939"}
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M12 1.3l3.917 7.744 8.567 1.245-6.234 6.092 1.472 8.56L12 19.347l-7.722 4.06 1.472-8.56-6.234-6.092 8.567-1.245L12 1.3z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
