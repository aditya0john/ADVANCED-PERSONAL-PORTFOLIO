"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="about"
      className="absolute h-[100vh] w-full flex items-center justify-center bg-black antialiased bg-grid-white/[0.02]  overflow-hidden select-none"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="violet"
      />
      <Spotlight className="top-1 left-90 h-[80vh] w-[50vw]" fill="white" />

      <div className="absolute h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex items-center justify-center relative my-20 z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xl">portfolio</h2>
          <TextGenerateEffect
            className="capitalize text-center  text-[40px] md:text-[5xl] lg:text-[6xl]"
            words="transforming concepts into seemless user experiences"
          />

          <p className="capitalize">
            Hi, I'm
            <span className="font-bold text-purple text-xl">
              {" "}
              Aditya John
            </span>{" "}
            a full stack web developer based in India.
          </p>

          <Link href="/" className="mt-5">
            <MagicButton
              title="Show My Work"
              position="right"
              icon={<FaLocationArrow />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
