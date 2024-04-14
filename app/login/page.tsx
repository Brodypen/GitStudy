"use client";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import supabaseBrowser from "@/lib/supabase/browser";
import { useSearchParams } from "next/navigation";
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function AuthComponent() {
  const params = useSearchParams();
  const next = params.get("next") || "";
  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + next,
      },
    });
  };

  return (
    <main className="min-h-screen w-screen overflow-hidden flex items-center justify-center text-center bg-gradient-radial from-#19181C to-#161518">
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
        <div className=" w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
          <div className="flex items-center gap-2">
            <KeyRound />
            <h1 className="text-2xl font-bold">GitStudy Login</h1>
          </div>

          <p className="text-sm text-gray-300">Register/SignIn Today!</p>
          <div className="flex flex-col gap-5 text-gray-900">
            <Button
              className=" w-full flex items-center gap-2 "
              variant="outline"
              onClick={() => handleLoginWithOAuth("github")}
            >
              <FaGithub /> Github
            </Button>
            <Button
              className=" w-full flex items-center gap-2 "
              variant="outline"
              onClick={() => handleLoginWithOAuth("google")}
            >
              <FcGoogle /> Google
            </Button>
          </div>
          <div className="glowBox -z-10"></div>
        </div>
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
