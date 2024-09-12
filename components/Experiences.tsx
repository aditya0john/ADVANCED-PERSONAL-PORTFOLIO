import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

function Experiences() {
  return (
    <div
      className="select-none flex flex-col items-center justify-center w-full py-20"
      id="Experiences"
    >
      <h1 className="heading text-4xl lg:text-5xl font-bold">My</h1>
      <span className="text-purple text-4xl lg:text-5xl font-bold">
        Work Experience
      </span>

      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-2xl lg:max-w-7xl">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="border-violet-900/[0.4] text-white flex-1"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt="image"
                height={300}
                width={300}
                className="lg:w-32 md:w-20 w-16"
              />
              <div>
                <h1 className="font-bold text-start text-xl md:text-2xl ">
                  {card.title}
                </h1>
                <p className="font-semibold text-start">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
