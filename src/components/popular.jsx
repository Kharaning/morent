import Card from "./carCard";

function Popular({ carArray, setCarArray,setCarOverview}) {
  return (
    <div className="flex flex-col font-varelaRound  bg-[#F6F7F9] justify-around">
      <span className="pl-10 pt-6 text-[#90A3BF] text-xl ">Popular Cars</span>
      <div className="flex pt-6 justify-around gap-3 flex-wrap lg:flex-nowrap p-8 ">
        {carArray
          .filter((s) => s.popularity === 5)
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
    </div>
  );
}

export default Popular;
