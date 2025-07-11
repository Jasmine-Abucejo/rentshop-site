import Navbar from "../components/Navbar";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductList from "../pages/ProductList";
import ImageModal from "../components/ImageModal";
import RentPage from "../pages/RentPage";

function App() {
  const location = useLocation();
  const state = location.state;

  // If we came from another route, store the background page
  const background = state?.backgroundLocation || null;

  return (
    <div className="h-screen flex  lg:flex-row">
      <Navbar />
      <div className="w-full h-full lg:ml-32 ">
        <div className="w-full h-1/14 lg:h-1/7 bg-gray-100 flex justify-between p-4 sticky top-15 lg:top-0 z-25 mb-14 lg:mb-0">
          <div className="font-bold lg:text-4xl ">SHOP NAME</div>
          <div className="flex justify-between gap-4">
            <span className="lg:text-3xl">
              <MdMessage />
            </span>
            <span className="lg:text-3xl">
              <IoNotifications />
            </span>
          </div>
        </div>
        <div>
          <Routes location={background || location}>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/image/:id" element={<ImageModal />} />
            <Route path="/rent/:id" element={<RentPage />} />
          </Routes>
          {background && (
            <Routes>
              <Route path="/image/:id" element={<ImageModal />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
