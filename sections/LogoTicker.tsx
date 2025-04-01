import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
const LogoTicker = () => {
  return (
    <div>
      <div className="container">
        <div className="flex gap-14 flex-none">
          <Image src={acmeLogo} alt="acmeLogo" className="logo-ticker-image" />
          <Image
            src={quantumLogo}
            alt="quantumLogo"
            className="logo-ticker-image"
          />
          <Image src={echoLogo} alt="echoLogo" className="logo-ticker-image" />
          <Image
            src={celestialLogo}
            alt="celestialLogo"
            className="logo-ticker-image"
          />
          <Image
            src={pulseLogo}
            alt="pulseLogo"
            className="logo-ticker-image"
          />
          <Image src={apexLogo} alt="apexLogo" className="logo-ticker-image" />
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
