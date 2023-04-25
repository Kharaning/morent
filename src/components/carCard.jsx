import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFuelPump, BsPeople } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { Link } from "react-router-dom";
function Card({
  name,
  fuel,
  clss,
  drive,
  seats,
  price,
  sr,
  id,
  favourite,
  carArray,
  setCarArray,
  setCarOverview,
}) {
  const changeCarFavourite = (e) => {
    const carArrayCopy = [...carArray];
    let changed = carArrayCopy.find((s) => s.id === e);
    changed.favourite = !changed.favourite;
    setCarArray(carArrayCopy);
  };

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
    <div className="p-4 font-varelaRound flex flex-col hover:shadow-2xl bg-[#FFFFFF] w-[80%] md:w-[40%] lg:w-[30%] rounded-[10px] gap-8 cursor-pointer ">
      <div className="flex flex-wrap justify-between">
        <h4 className="font-bold text-xl ">
          <p>{name}</p>
          
          <span className="text-[#90A3BF] p text-base font-medium">{clss}</span>
        </h4>
        {favourite ? (
          <AiFillHeart
            className="text-2xl text-[#ED3f3f]"
            onClick={() => changeCarFavourite(id)}
          />
        ) : (
          <AiOutlineHeart
            className="text-2xl text-[#90A3BF] hover:text-[#ED3f3f]"
            onClick={() => changeCarFavourite(id)}
          />
        )}
      </div>
      <div className="h-[130px]  flex justify-center align-center">
        <img src={sr} className="w-3/4 h-[auto] self-center" />
      </div>
      <div className="flex justify-between  text-[#90A3BF] flex-wrap xl:flex-nowrap items-center  font-medium ">
        <span className="flex gap-2 ">
          {<BsFuelPump className="self-center" />}
          {fuel}L
        </span>
        <span className="flex gap-2 ">
          {<GiSteeringWheel className="self-center" />} {drive}
        </span>
        <span className="flex gap-2 ">
          {<BsPeople className="self-center" />} {seats} people
        </span>
      </div>
      <div className="flex justify-between pt-2 flex-col lg:flex-row items-center">
        <h3 className="font-bold flex gap-1 p-2">
          ${price} /<span className="font-light text-[#90A3BF]">day</span>
        </h3>
        <Link to={"/cars/" + id + name + seats}>
          <button
            onClick={carOverviewPage}
            className="bg-[#3563E9] text-[#ffffff] hover:opacity-80 p-2 whitespace-nowrap pl-2 pr-2 rounded-[6px] font-medium tracking-wider "
          >
            Rent Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
