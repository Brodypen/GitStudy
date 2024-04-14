"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen w-screen overflow-hidden flex items-center justify-center text-center bg-gradient-radial from-#19181C to-#161518">
      <div className="fixed top-0 left-0 p-4 flex justify-between w-full px-8 z-50">
        <Link href="/" passHref>
          <div className="text-white">Home</div>
        </Link>
        <div className="flex">
          <Link href="/about" passHref>
            <div className="text-white mr-4">About</div>
          </Link>
          <Link href="/login" passHref>
            <div className="text-white">Login</div>
          </Link>
        </div>
      </div>
      <Boxes className="" />
      <div className="z-10">
        <p className="md:text-6xl sm:text-3xl jersey-25">GitStudy</p>
        <p className="mt-2 tracking-wider">The future of learning</p>
        <button>
          <a
            href="/login"
            className={cn(
              "mt-4 inline-block px-3 py-2 bg-[#0EA47A] text-white rounded-lg"
            )}
          >
            Get Started
          </a>
        </button>
      </div>
      <div className="fixed bottom-0 left-0 p-4 px-8 flex">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Image src="/github.svg" alt="GitHub logo" width={24} height={24} />
        </a>
        <a
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <Image src="/figma.svg" alt="Figma logo" width={24} height={24} />
        </a>
      </div>
    </main>
  );
};

export default Home;
