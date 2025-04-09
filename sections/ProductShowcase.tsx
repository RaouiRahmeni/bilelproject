import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">boost your productivity</div>
          </div>
          <h2 className="text-center text-5xl m:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#0d3dff] text-transparent bg-clip-text mt-5">
            A more efficient way to track prograss
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero animi
            impedit possimus! Libero, natus vero et
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="productImage" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramidImage"
            height={262}
            width={262}
            className="hidden md:block absolute -right-22 -top-28"
          />
          <Image
            src={tubeImage}
            alt="tubeImage"
            height={248}
            className="hidden md:block absolute bottom-24 -left-22"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
