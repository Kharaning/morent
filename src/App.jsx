import Header from "./components/header";
import DetailCar from "./components/detailCar";
import Footer from "./components/footer";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Mainpage";
import ScrollToTop from "./components/scrolltotop";
import RentPage from "./components/rentpage";
function App({ cars }) {
  const [carArray, setCarArray] = useState([...cars]);
  const [carOverview, setCarOverview] = useState({});
  return (
    <Router>
      <ScrollToTop />
      <nav>
        <Header carArray={carArray} setCarOverview={setCarOverview} />
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              carArray={carArray}
              setCarArray={setCarArray}
              setCarOverview={setCarOverview}
            />
          }
        />
        <Route
          path="/cars/:Id"
          element={
            <DetailCar
              carOverview={carOverview}
              setCarOverview={setCarOverview}
              carArray={carArray}
              setCarArray={setCarArray}
            />
          }
        />
        <Route
          path="/cars/:id/rent"
          element={<RentPage carOverview={carOverview} />}
        />
      </Routes>
      <nav>
        <Footer />
      </nav>
    </Router>
  );
}

export default App;
