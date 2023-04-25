import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
function CarCardSmall({
  name,
  fuel,
  sr,
  clss,
  price,
  seats,
  drive,
  id,
  favourite,
  setCarOverview,
}) {
  const carOverviewPage = () => {
    setCarOverview({
      name: name,
      fuel: fuel,
      clss: clss,
      drive: drive,
      seats: seats,
      price: price,
      sr: sr,
      id: id,
      favourite: favourite,
    });
  };
  return (
    <div className="flex font-varelaRound flex-col  bg-[rgba(255,255,255,0.9)]  [backdrop-filter:blur(8px)] border-[1px] border-[#131313]   pt-4 cursor-pointer">
      <div className=" flex pl-2 pb-2 pr-2 border-red-800">
        <div className="w-[120px]  h-[auto] border-">
          <img src={sr} className="" />
        </div>
        <div className="w-[50%] pl-6">
          <h3 className="font-bold">{name}</h3>
          <p className=" font-semibold">{clss}</p>
        </div>
        <div className="flex gap-1 justify-center align-middle w-[120px] font-bold ">
          <BsPeople className="self-center" />
          <span className="self-center"> {seats}</span>
        </div>
        <p className="self-center font-bold  text-center  w-[30%]">$ {price}</p>
        <Link to={"/cars/" + id + name + seats}>
          <button
            onClick={carOverviewPage}
            className="bg-[#3563E9] w-36 h-10 hover:opacity-80 text-[#ffffff] self-center  rounded-[6px] font-small  "
          >
            Rent
          </button>
        </Link>
      </div>
    </div>
  );
}
export default CarCardSmall;
