import { FaArrowRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md-block">
          الأولى في المملكة في خدمات الأعمال
        </p>
        <div className="inline-flex gap-2 items-center">
          <p>
            يهدف عملنا إلى ابتكار الأفكار واستقطاب الكوادر التي تمثّل أعلى
            معايير التّميّز في تقديم خدمةٍ مهنيّةٍ احترافيّةٍ بأعلى جودةٍ ممكنةٍ
            وتمكين كلّ من يساهم بذلك من النّموّ المستمرّ
          </p>
          <FaArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="p-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="bilel service" height={40} width={40} />
            <IoIosMenu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a
                className="border border-transparent hover:border-black hover:border-x-transparent px-4 py-2  font-medium inline-flex justify-center tracking-tight"
                href=""
              >
                Home
              </a>
              <a
                className="border border-transparent hover:border-black hover:border-x-transparent px-4 py-2  font-medium inline-flex justify-center tracking-tight"
                href=""
              >
                About us
              </a>
              <a
                className="border border-transparent hover:border-black hover:border-x-transparent px-4 py-2  font-medium inline-flex justify-center tracking-tight"
                href=""
              >
                Help center
              </a>
              <a
                className="border border-transparent hover:border-black hover:border-x-transparent px-4 py-2  font-medium inline-flex justify-center tracking-tight"
                href=""
              >
                Packages
              </a>
              <a
                className="border border-transparent hover:border-black hover:border-x-transparent px-4 py-2  font-medium inline-flex justify-center tracking-tight"
                href=""
              >
                Services
              </a>
              <button className="bg-transparent hover:bg-black border border-black text-black hover:text-white transition duration-200 hover:cursor-pointer px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
                Request a Quote
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
