import React from "react";
import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center ">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]">
          <Image
            src="/images/bgimage.png"
            alt="bgImage"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
