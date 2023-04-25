import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import imgF from "../assets/proF.png";
import imgM from "../assets/proM.png";
import { useState } from "react";
import cars from "../cars";
import Card from "./carCard";
import { Link } from "react-router-dom";

export default function DetailCar({
  carOverview,
  setCarOverview,
  carArray,
  setCarArray,
}) {
  const [commentButt, setCommentButt] = useState(2);

  const carReview = [
    {
      authorName: "Alex Stanton",
      reviewId: 1,
      authorIMG: imgM,
      authorStatus: "CEO at Bukalapak",
      reviewDate: "24 Jul 2023",
      authorReview:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      authorName: "Skylar Dias",
      reviewId: 2,
      authorIMG: imgF,
      authorStatus: "CEO at Amazon",
      reviewDate: "24 Jul 2023",
      authorReview:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      authorName: "Michael Johnson",
      reviewId: 3,
      authorIMG: imgM,
      authorStatus: "Actor",
      reviewDate: "24 Jul 2023",
      authorReview:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      authorName: "Taylor James",
      reviewId: 4,
      authorIMG: imgF,
      authorStatus: "Singer",
      reviewDate: "24 Jul 2023",
      authorReview:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
  ];

  const comB = (commentButt) => {
    if (commentButt === 2) {
      return <button onClick={() => setCommentButt(4)}>Show More ↓</button>;
    }
    if (commentButt === 4) {
      return <button onClick={() => setCommentButt(2)}>Show Less ↑ </button>;
    }
  };
  return (
    <div className="bg-[#f6f7f9] flex font-varelaRound gap-8 flex-col pb-6 justify-center  ">
      <div className="flex  flex-col xl:flex-row gap-5 pt-8 justify-center w-[90%] md:w-[65%] self-center ">
        <img
          src={carOverview.sr}
          className="w-[100%] max-w-[500px]  h-[300px] rounded-[8px] bg-[#3566E9] pt-[120px] p-4"
        />
        <div className="flex flex-col bg-[#ffffff] p-4 gap-4 rounded-[8px]">
          <h3 className="font-bold text-4xl">{carOverview.name}</h3>
          <div className="flex gap-2 ">
            <AiFillStar className="text-yellow-500 text-xl self-center" />
            <AiFillStar className="text-yellow-500 text-xl self-center" />
            <AiFillStar className="text-yellow-500 text-xl self-center" />
            <AiFillStar className="text-yellow-500 text-xl self-center" />
            <AiOutlineStar className=" text-[#90A3BF] text-xl self-center" />
            <p className="text-md text-[#596780]">440+ Reviews</p>
          </div>
          <p className="text-[#596780] font-semibold">
            {carOverview.name} has become one of the most popular cars . Because
            of its unforgiving <br />
            comfortability and clean interior
          </p>
          <div className="flex flex-wrap ">
            <span className="w-[50%] text-[#90A3BF]  flex gap-6">
              Type Car{" "}
              <span className="text-[#596780] font-semibold">
                {carOverview.clss}
              </span>
            </span>
            <span className="w-[50%] text-[#90A3BF]  flex gap-6">
              Capacity{" "}
              <span className="text-[#596780] font-semibold">
                {carOverview.seats}
              </span>
            </span>
            <span className="w-[50%] text-[#90A3BF]  flex gap-6">
              Steering{" "}
              <span className="text-[#596780] font-semibold">
                {carOverview.drive}
              </span>
            </span>
            <span className="w-[50%] text-[#90A3BF]  flex gap-6">
              Gasoline{" "}
              <span className="text-[#596780] font-semibold">
                {carOverview.fuel}L
              </span>
            </span>
          </div>
          <div className="flex justify-between pt-4">
            <h4 className="text-xl font-bold">
              ${carOverview.price}/
              <span className="font-semibold text-[#90A3BF] text-sm">days</span>
            </h4>
            <Link
              to={
                "/cars/" +
                carOverview.id +
                carOverview.name +
                carOverview.seats +
                "/rent/"
              }
            >
              <button className="bg-[#3563E9] pt-2 pb-2 pl-4 pr-4 text-[#ffffff] font-semibold rounded-[8px] text-sm hover:opacity-80">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  rounded-[8px] flex-col gap-5 p-8  justify-center w-[90%] md:w-[65%] self-center">
        <div className="flex flex-col  p-4 gap-5  justify-center  bg-[#ffffff] self-center">
          <h4 className="w-[100%] text-xl font-bold">
            Reviews{" "}
            <span className="bg-[#3563E9] text-white pt-1 pb-1 pr-2 pl-2 rounded font-bold">
              {carReview.length}
            </span>
          </h4>
          {carReview.slice(0, commentButt).map((s) => (
            <div key={s.reviewId} className="flex flex-row">
              <div className="w-[100%] lg:w-[30%] p-1 ">
                <img src={s.authorIMG} />
              </div>
              <div className="flex flex-wrap justify-between pl-2">
                <h4 className="font-bold text-xl w-[50%] ">{s.authorName}</h4>
                <p className="w-[50%]  flex justify-end text-[#90A3BF]">
                  {s.reviewDate}
                </p>
                <span className="w-[50%] text-[#90A3BF] pt-1 ">
                  {s.authorStatus}
                </span>
                <div className="w-[50%] flex gap-2 justify-end">
                  <AiFillStar className="text-yellow-500 text-xl self-center" />
                  <AiFillStar className="text-yellow-500 text-xl self-center" />
                  <AiFillStar className="text-yellow-500 text-xl self-center" />
                  <AiFillStar className="text-yellow-500 text-xl self-center" />
                  <AiOutlineStar className=" text-[#90A3BF] text-xl self-center" />
                </div>
                <p className="w-[100%] pt-2">{s.authorReview}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#ffffff] flex justify-center font-semibold text-[#90A3BF] ">
          {comB(commentButt)}
        </div>
      </div>

      <div className="w-[62%]  rounded-[8px] flex flex-wrap bg-[#ffffff]  self-center  gap-1 justify-center">
        <p className="p-4 font-semibold text-[#90A3BF]  w-[100%] text-xl">
          Recent Cars
        </p>
        <div className="flex justify-around gap-[4px] flex-wrap    ">
          {cars.slice(2, 10).map((s) => (
            <Card
              key={s.id}
              id={s.id}
              name={s.name}
              clss={s.class}
              fuel={s.fuel}
              drive={s.drive}
              seats={s.seats}
              price={s.price}
              sr={s.sr}
              favourite={s.favourite}
              setCarOverview={setCarOverview}
              carArray={carArray}
              setCarArray={setCarArray}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
