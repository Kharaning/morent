import { useState } from "react";
import { AiFillSetting, AiFillHeart } from "react-icons/ai";
import CarCardSmall from "./carCardSmall";
import { Link } from "react-router-dom";
function Header({ carArray, setCarOverview }) {
  const [favouriteTab, setFavouriteTab] = useState(false);


  const favouriteTabHandle = () => {
    setFavouriteTab(!favouriteTab);
  };
  return (
    <div className="font-varelaRound">
      <div className="flex justify-between p-10  w-full ">
        <Link to="/">
          <h1 className="text-blue-500 text-3xl font-bold">MORENT</h1>
        </Link>

        <div className="flex justify-around w-[100px]">
          {favouriteTab ? (
            <AiFillHeart
              className=" text-[40px]   p-1.5 cursor-pointer text-blue-500 border-solid border-2  border-blue-500 rounded-full"
              onClick={favouriteTabHandle}
            />
          ) : (
            <AiFillHeart
              className=" text-[40px] hover:text-blue-500 hover:border-blue-500  p-1.5 cursor-pointer text-[#596780] border-solid border-2  border-[#c3d4e9] rounded-full"
              onClick={favouriteTabHandle}
            />
          )}

          <AiFillSetting className=" text-[40px] p-1.5  cursor-pointer text-[#596780] border-solid border-2  border-[#c3d4e9] rounded-full" />
        </div>
      </div>

      <div className="absolute right-10 w-[90%] lg:w-[50%] xl:w-[40%] flex flex-col h-[auto]   ">
        {favouriteTab ? (
          carArray
            .filter((s) => s.favourite === true)
            .map((s) => (
              <CarCardSmall
                name={s.name}
                sr={s.sr}
                clss={s.class}
                price={s.price}
                seats={s.seats}
                fuel={s.fuel}
                favourite={s.favourite}
                id={s.id}
                drive={s.drive}
                setCarOverview={setCarOverview}
              />
            ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Header;
