import Link from "next/link";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";

function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-center pt-20 pb-10"
    >
      <div className="select-none flex flex-col items-center justify-center w-full py-20">
        <h1 className="heading text-4xl lg:text-5xl font-bold">
          Ready to take{" "}
          <span className="text-purple text-4xl lg:text-5xl font-bold">
            your{" "}
          </span>
        </h1>
        <h1 className="heading text-4xl lg:text-5xl font-bold">
          digital presence to the next level
        </h1>
        <p className="text-gray-300 text-center md:mt-10 my-5">
          Reach out to me and let&apos;s discuss how can I help you achieve your
          goals
        </p>
        <Link href={"mailto:johnaditya46@gmail.com"}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="w-full flex mt-16 justify-around items-center">
        <div>
          <p className="select-none text-sm md:text-base font-light md:font-normal">
            Copyright © 2024 Aditya John
          </p>
        </div>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((socials) => (
            <div key={socials.id}>
              <Image
                src={socials.img}
                alt={socials.img}
                height={20}
                width={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
