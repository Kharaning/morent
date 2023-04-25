import gtrBig from "../assets/gtrBig.png";
import koenigBig from "../assets/koenigseggbig.png";

function Hero() {
  return (
    <div className="flex justify-center font-varelaRound lg:justify-between pl-10 pr-10  gap-10 bg-[#f6f7f9] pt-4">
      <div className="pt-10 bg-[#54A6FF] text-white  h-[400px] lg:w-[50%] p-4 flex flex-col justify-between rounded-[10px]">
        <h4 className="text-2xl">
          The Best Platform <br /> for Car Rental
        </h4>
        <p className="text-xl">
          easy of doing a car rental safely and <br />
          reliably. Of course at a low price
        </p>
        <button className="p-2 bg-[#3563E9] rounded-[4px] w-1/4 radius-[4px]">
          Rental Car
        </button>
        <img src={koenigBig} className="w-2/4 self-center pl-4" />
      </div>
      <div className="pt-10 bg-[#3563E9] hidden text-white lg:flex lg:w-[50%] h-[400px] p-4  flex-col justify-between rounded-[10px]">
        <h4 className="text-2xl">
          Easy way to rent a <br /> car at a low price
        </h4>
        <p className="text-xl">
          providing cheap car rental services <br /> and safe and comfortable
          facilities
        </p>
        <button className="p-2 bg-[#54A6FF] rounded-[4px] w-1/4 radius-[4px]">
          Rental Car
        </button>
        <img src={gtrBig} className="w-2/4 self-center pl-4" />
      </div>
    </div>
  );
}

export default Hero;
