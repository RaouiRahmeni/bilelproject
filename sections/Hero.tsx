import { FaArrowRight } from "react-icons/fa";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:mb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px] ms-16">
            <div className="text-sm inline-flex order border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to prototype
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, at
              adipisci maxime iusto voluptates quod, dolore vero perspiciatis ab
              quis aliquid.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn gap-1">
                <span> Learn more</span>
                <FaArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="cogimage"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="cylinderImage"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute    "
            />
            <Image
              src={noodleImage}
              alt="noodleImage"
              width={220}
              className="absolute hidden lg:block top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
