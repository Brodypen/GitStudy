"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import supabaseBrowser from "@/lib/supabase/browser";
import { useSearchParams } from "next/navigation";
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";

export default function AuthComponent() {
  const params = useSearchParams();
  const next = params.get("next") || "dashboard";
  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/dashboard",
      },
    });
  };

  return (
    <main
      className="min-h-screen w-screen overflow-hidden flex items-center justify-center text-center"
      style={{
        background:
          "linear-gradient(to bottom left, #161518 50%, #2F2656 100%)",
      }}
    >
      <div className="fixed top-0 left-0 p-4 flex justify-between w-full px-8">
        <Link href="/" className="text-white z-50">
          Home
        </Link>
        {/* <div className="flex">
            <Link href="/about" className="text-white mr-4">
              About
            </Link>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </div> */}
      </div>
      <Boxes className="" />
      <div className="z-10">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl text-center font-bold mb-10">
            Login to your account
          </h1>
        </div>

        <div className="flex flex-col gap-5 text-gray-900">
          <Button
            className=" w-full flex items-center gap-2 font-bold"
            variant="outline"
            onClick={() => handleLoginWithOAuth("github")}
          >
            <FaGithub /> Login with GitHub
          </Button>

          <Button
            className=" w-full flex items-center gap-2 font-bold"
            variant="outline"
            onClick={() => handleLoginWithOAuth("google")}
          >
            <FcGoogle /> Login with Google
          </Button>
        </div>
        <div className="glowBox -z-10"></div>
      </div>
      {/* <div className="z-10">
          <p className="text-6xl jersey-25">GitStudy</p>
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
        </div> */}
    </main>
  );
}
