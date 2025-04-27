import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="bg-green font-geist">
      <p className="text-white text-wrap font-semibold text-center py-5 max-sm:text-[14px]">
        Copyright {year}. All Rights Reserved Green Earth.
      </p>
    </section>
  );
};

export default Footer;
