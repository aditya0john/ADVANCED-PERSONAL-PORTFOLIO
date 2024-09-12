import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import Image from "next/image";

function Grid() {
  return (
    <section>
      <Image
        src="/Me1.PNG"
        className="grayscale mx-30 lg:mx-40 w-[60vw] lg:w-[40vw] h-[80vh] "
        alt="image"
        height={700}
        width={700}
      />
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default Grid;
