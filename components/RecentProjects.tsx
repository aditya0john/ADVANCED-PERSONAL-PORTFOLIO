import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-Pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

function RecentProjects() {
  return (
    <div
      className="select-none flex flex-col items-center justify-center w-full py-20"
      id="Projects"
    >
      <h1 className="heading text-4xl lg:text-5xl font-bold">
        A small section of{" "}
      </h1>
      <span className="text-purple text-4xl lg:text-5xl font-bold">
        Recents Projects
      </span>

      <div className="grid lg:grid-cols-2 md:grid-flow-cols-1 p-4 gap-x-24 gap-y-8 items-center">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32rem] sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative bg-[#1F0821] h-full w-full overflow-hidden lg:rounded-3xl">
                  <Image src="/bg.png" alt="bg-img" fill />
                </div>

                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 object-cover"
                  height={400}
                  width={400}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl text-sm opacity-80 line-clamp-2">
                {des}
              </p>
              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex">
                  {iconLists.map((icons, i) => (
                    <div
                      key={icons}
                      className="border bg-black border-white/[0.2] rounded-full p-2 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i * 2}px) ` }}
                    >
                      <Image src={icons} alt={icons} height={20} width={20} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-purple/[0.8] lg:text-xl md:text-xs text-base">
                    Check live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
