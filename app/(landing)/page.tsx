"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

const font = Montserrat({ weight: "600", subsets: ["latin"] });
function LandingPage() {
  const { isSignedIn } = useAuth();
  
  return (
    <div className="h-full ">
      <nav className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            Genius
          </h1>
        </Link>
        <div className="flex items-center gap-x-2">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="outline" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
      <div className="text-white font-bold py-36 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>The Best AI Tool for</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: [
                  "Chatbot.",
                  "Photo Generation.",
                  "Blog Writing.",
                  "Mail Writing.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Create content using AI 10x faster.
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="premium"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Start Generating
            </Button>
          </Link>
        </div>
        {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required.
        </div> */}
      </div>
      
    </div>
    // <div className="flex items-center justify-center h-[100vh] bg-[#140014]">
    //   <div className="flex flex-col items-center justify-center px-36 py-16 border-4 gap-8 rounded-lg border-[#d2e5e9]">
    //     <Image
    //       alt="Logo"
    //       src={"/logo.png"}
    //       width={20}
    //       height={20}
    //       className="animate-spin"
    //     />
    //     <span className="font-semibold text-4xl text-red-500 text-white">
    //       AI SAAS
    //     </span>
    //     <div className="flex items-center gap-4">
    //       <Link href="/sign-in">
    //         <Button className="text-white" variant={"default"}>
    //           Login
    //         </Button>
    //       </Link>
    //       <Link href="/sign-up">
    //         <Button className="text-white" variant={"default"}>
    //           Register
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LandingPage;
