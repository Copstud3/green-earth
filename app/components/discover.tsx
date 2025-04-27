import Image from "next/image";
import React from "react";

const Discover = () => {
  return (
    <section className="bg-yellow xl:h-[691px] max-sm:py-5">
      <div className="flex flex-col max-sm:px-3 xl:flex-row max-sm:justify-center items-center xl:gap-[124px] xl:py-[59px] xl:px-[118px]">
        <Image
          src="/earth-and-plant.png"
          alt="earth-and-plant"
          width={200}
          height={200}
          className="xl:w-[598px] w-[150px]"
        />
        <div className="flex flex-col gap-8 justify-center max-sm:items-center">
          <p className="font-pompiere text-[30px] xl:text-[80px] text-green xl:w-[450px] max-sm:text-center">
            Discover green earth landscaping
          </p>
          <p className="font-geist text-[#232323] xl:text-[20px] xl:w-[500px] max-sm:text-center">
            Green Earth Landscaping offers professional gardening and unlimited
            services that can help many people working. We make sure that our
            services will definitely satisfy your needs.
          </p>
          <button className="bg-green text-white font-geist px-[20px] xl:px-[70px] py-3 rounded-md w-fit">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
