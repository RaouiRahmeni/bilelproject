import { TbTransactionDollar, TbWorldSearch } from "react-icons/tb";
import { GiDiploma } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";

const LogoTicker = () => {
  return (
    <div className="relative md:py-12 bg-white">
      <div className="container absolute -top-16">
        <div className="justify-center flex overflow-hidden [mask-image:linear-gradient(to-right,transparent,black,transparent)]">
          <div className="flex gap-20 flex-none">
            <div className="border  border-amber-950">
              <MdBusiness className="h-32 w-auto text-gray-500" />

              <h2></h2>
            </div>
            <div>
              <GiDiploma className="h-32 w-auto text-gray-500" />

              <h2></h2>
            </div>
            <div>
              <TbWorldSearch className="h-32 w-auto text-gray-500" />

              <h2></h2>
            </div>
            <div>
              <TbTransactionDollar className="h-32 w-auto text-gray-500" />

              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
