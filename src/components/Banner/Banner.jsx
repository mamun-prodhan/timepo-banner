import paintBG from "../../assets/paint-bg.png";
import watchBG from "../../assets/watch-bg.png";
import timepoLogo from "../../assets/logo.png";
import toggle from "../../assets/toggle-btn.png";
import logout from "../../assets/Logout.png";
const Banner = () => {
  return (
    <div className="max-w-[1440px] bg-[#121213]">
      {/* top bg */}
      <div
        className="hidden md:block mb-10 lg:mb-20 md:h-[208px]"
        style={{
          backgroundImage: `url(${paintBG})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* watch bg */}
      <div
        className="px-6 md:px-16 lg:px-20 xl:px-40 h-[280px] md:h-[585px]"
        style={{
          backgroundImage: `url(${watchBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="w-1/6">
            <img className="float-left" src={toggle} alt="" />
          </div>
          <div className="w-2/3">
            <img className="mx-auto" src={timepoLogo} alt="" />
          </div>
          <div className="w-1/6">
            <img
              className="float-right w-[38px] md:w-[48px] h-[40px] md:h-[50px]"
              src={logout}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
