import Hero from "./components/hero";
import Popular from "./components/popular";
import Recommended from "./components/recomended";

export default function Home({ carArray, setCarArray, setCarOverview }) {
  return (
    <>
      <Hero />
      <Popular
        carArray={carArray}
        setCarArray={setCarArray}
        setCarOverview={setCarOverview}
      />
      <Recommended
        carArray={carArray}
        setCarArray={setCarArray}
        setCarOverview={setCarOverview}
      />
    </>
  );
}
