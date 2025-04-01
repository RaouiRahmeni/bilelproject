import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div>
          {" "}
          <div className="text-sm inline-flex order border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            version 2.0 is here
          </div>
          <h1 className="text-5xl font bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to prototype
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, at
            adipisci maxime iusto voluptates quod, dolore vero perspiciatis ab
            quis aliquid.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
