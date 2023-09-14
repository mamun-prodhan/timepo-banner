import paintBG from "../../assets/paint-bg.png";
import watchBG from "../../assets/watch-bg.png";
import timepoLogo from "../../assets/logoBlack.png";
import toggle from "../../assets/toggle-btn.png";
import logout from "../../assets/Logout.png";

const BannerWhite = () => {
  return (
    <div className="w-[1440px] bg-[#FFF]">
      {/* top bg */}
      <div
        className="hidden md:block mb-20"
        style={{
          height: "208px",
          backgroundImage: `url(${paintBG})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* watch bg */}
      <div
        className="px-16 md:px-20 lg:px-40"
        style={{
          height: "585px",
          backgroundImage: `url(${watchBG})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="w-1/6">
            <img className="float-left w-[96px] h-[48px]" src={toggle} alt="" />
          </div>
          <div className="w-2/3">
            <img className="mx-auto" src={timepoLogo} alt="" />
          </div>
          <div className="w-1/6">
            <img
              className="float-right w-[48px] h-[50px]"
              src={logout}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWhite;
