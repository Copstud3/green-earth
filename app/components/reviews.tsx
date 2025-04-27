import React from "react";

const Reviews = () => {
  return (
    <section className="xl:h-[550px] flex flex-col items-center justify-center max-sm:py-5 py-[10px]">
      <h1 className="font-pompiere text-[35px] xl:text-[70px] text-white">Reviews</h1>
      <p className="text-white text-[15px]  xl:text-[25px] font-geist font-medium">
        What other people are saying!
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 px-8 xl:px-30 gap-5 xl:gap-10 mt-10 xl:mt-16">
        <div className="bg-yellow xl:w-[370px] rounded-[30px] px-8 py-8 flex flex-col items-center justify-center gap-3">
          <p className="font-geist text-[#232323] text-center">
            "Indulge in the sublime experience of Coffee Borcelle, where every
            sip is a journey to flavor paradise. Crafted with precision, our
            rich blends ignite the senses and redefine coffee appreciation."
          </p>
          <p className="font-geist font-semibold text-[#232323]">@elonmusk</p>
        </div>

        <div className="bg-yellow xl:w-[370px] rounded-[30px] px-8 py-8 flex flex-col items-center justify-center gap-3">
          <p className="font-geist text-[#232323] text-center">
            "Indulge in the sublime experience of Coffee Borcelle, where every
            sip is a journey to flavor paradise. Crafted with precision, our
            rich blends ignite the senses and redefine coffee appreciation."
          </p>
          <p className="font-geist font-semibold text-[#232323]">@elonmusk</p>
        </div>

        <div className="bg-yellow  xl:w-[370px] rounded-[30px] px-8 py-8 flex flex-col items-center justify-center gap-3">
          <p className="font-geist text-[#232323] text-center">
            "Indulge in the sublime experience of Coffee Borcelle, where every
            sip is a journey to flavor paradise. Crafted with precision, our
            rich blends ignite the senses and redefine coffee appreciation."
          </p>
          <p className="font-geist font-semibold text-[#232323]">@elonmusk</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
