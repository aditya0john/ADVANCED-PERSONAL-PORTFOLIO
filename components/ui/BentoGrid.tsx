"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GradientBg } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

("./GridGlobe");

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
          // grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  spareImg,
  imgClassName,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: Number;
  img: string;
  spareImg: string;
  imgClassName: string;
  titleClassName: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("johnaditya46@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "select-none row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col",
        className
      )}
      style={{
        background: "rgb(12,0,18)",
        backgroundColor:
          " linear-gradient(180deg, rgba(251,232,255,1) 0%, rgba(50,19,50,1) 0%, rgba(80,71,82,1) 0%, rgba(68,0,73,1) 0%, rgba(209,163,222,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              fill
              src={img}
              alt={img}
              className={(cn(imgClassName), "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5
             ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <Image
              height={100}
              width={100}
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <GradientBg>
            {/* <div className="z-50 absolute flex justify-center items-center text-white font-bold" /> */}
          </GradientBg>
        )}
        {id === 2 && <GridGlobe />}
        <div
          className={cn(
            titleClassName,
            "p-3 group-hover/bento:translate-x-2 transition duration-200 relative h-full top-0 lg:min-h-0 min-h-60 flex flex-col"
          )}
        >
          <div className=" font-sans font-extralight text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl z-10 ">
            {title}
          </div>
          {id === 3 && (
            <div className="flex justify-end">
              <div className="grid grid-cols-2 gap-1 lg:gap-5 w-fit">
                <div className="flex flex-col  gap-2 lg:gap-3">
                  {["React.js", "Next.js", "Yarn.js"].map((item) => (
                    <span
                      key={item}
                      className="py-3 px-2 md:opacity-50 lg:opacity-100 bg-[#1F0821] rounded"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="py-6 md:opacity-50 lg:opacity-100 bg-[#1F0829] rounded" />
                </div>

                <div className="flex flex-col gap-2 lg:gap-3">
                  <span className="py-6 md:opacity-50 lg:opacity-100 bg-[#1F0829] rounded" />
                  {["Tailwind CSS", "MongoDB", "Typescript"].map((item) => (
                    <span
                      key={item}
                      className="py-3 px-2 md:opacity-50 lg:opacity-100 bg-[#1F0821] rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>{" "}
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy My Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#1F0821]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
