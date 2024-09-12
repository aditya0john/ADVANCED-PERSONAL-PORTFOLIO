"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { Button } from "./ui/MovingBorders";
import MagicButton from "./ui/MagicButton";

export default function Approach() {
  return (
    <>
      <section className="" id="Approach">
        <div className="select-none flex flex-col items-center justify-center w-full py-20">
          <h1 className="heading text-4xl lg:text-5xl font-bold">
            My{" "}
            <span className="text-purple text-4xl lg:text-5xl font-bold">
              Approach
            </span>
          </h1>

          <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-2">
            <Card
              title="Planning & Strategy"
              icon={<AceternityIcon order="Phase 1" />}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe, veniam esse ullam ea quod laborum asperiores nam repudiandae amet, quis, eligendi expedita reiciendis nobis veritatis neque modi. Inventore, itaque?"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-black"
              />
            </Card>
            <Card
              title="2"
              icon={<AceternityIcon order="Phase 2" />}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe, veniam esse ullam ea quod laborum asperiores nam repudiandae amet, quis, eligendi expedita reiciendis nobis veritatis neque modi. Inventore, itaque?"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
            </Card>
            <Card
              title="3"
              icon={<AceternityIcon order="Phase 3" />}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique saepe, veniam esse ullam ea quod laborum asperiores nam repudiandae amet, quis, eligendi expedita reiciendis nobis veritatis neque modi. Inventore, itaque?"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white/[0.5] text-md text-justify opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <MagicButton title={order} otherClasses="!text-3xl" />
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
