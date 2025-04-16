import { TbTransactionDollar, TbWorldSearch } from "react-icons/tb";
import { GiDiploma } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";

const LogoTicker = () => {
  return (
    <div className="relative md:py-12 ">
      <div className="container absolute -top-16 left-1/12  w-10/12">
        <div className="justify-center flex overflow-hidden [mask-image:linear-gradient(to-right,transparent,black,transparent)]">
          <div className="flex flex-none text-white">
            <div className="flex flex-col justify-center items-center p-10 bg-blue-800">
              <MdBusiness className="h-32 w-auto" />
              <h2>Business advice</h2>
            </div>
            <div className="flex flex-col justify-center items-center p-10 bg-blue-500">
              <TbWorldSearch className="h-32 w-auto" />

              <h2>Solutions and Plans</h2>
            </div>
            <div className="flex flex-col justify-center items-center p-8 bg-blue-800">
              <GiDiploma className="h-32 w-auto" />
              <h2>Training and Qualification</h2>
            </div>
            <div className="flex flex-col justify-center items-center p-6 bg-blue-500">
              <TbTransactionDollar className="h-32 w-auto" />

              <h2>Development and Excellence</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
