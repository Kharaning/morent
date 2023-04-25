import Card from "./carCard";

function Recommended({ carArray, setCarArray, setCarOverview }) {
  return (
    <div className="flex flex-col font-varelaRound bg-[#F6F7F9] justify-around">
      <br />
      <span className="pl-10 pt-6 text-[#90A3BF] text-xl ">
        Recomendation Car
      </span>
      <br />
      <div></div>
      <div className="flex pt-6 justify-around  flex-wrap gap-8">
        {carArray
          .filter((s) => s.popularity === 1)
          .map((s) => (
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
              carArray={carArray}
              setCarArray={setCarArray}
              setCarOverview={setCarOverview}
            />
          ))}
      </div>
      <div className="bg-[#f6f7f9] flex justify-center align-center p-12 text-[#ffffff]">
        <button className="bg-[#3563E9] p-2 pl-4 pr-4 hover:opacity-80 rounded-[6px]">
          Show more cars
        </button>
      </div>
    </div>
  );
}

export default Recommended;
