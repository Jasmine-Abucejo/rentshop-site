import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductList from "../pages/ProductList";
import ImageModal from "../components/ImageModal";
import RentPage from "../pages/RentPage";

function App() {
  const location = useLocation();
  const state = location.state;
  const [mobileSearch, setMobileSearch] = useState(false);
  const search = () => {
    setMobileSearch(true);
    console.log("clicked");
  };
  // If we came from another route, store the background page
  const background = state?.backgroundLocation || null;

  return (
    <div className="h-screen flex  lg:flex-row">
      <Navbar />
      <div className="w-full h-full lg:ml-32 ">
        <div className="w-full h-1/14 lg:h-1/7 bg-gray-100 flex justify-end  lg:justify-between gap-8 p-4 sticky top-15 lg:top-0 z-25 mb-14 lg:mb-0">
          <div className="font-bold lg:text-4xl flex-1">SHOP NAME</div>
          <div className="flex flex-1 lg:justify-between  items-center gap-4 ">
            <FaSearch
              className="lg:absolute ml-32 lg:ml-60 text-pink-400 "
              onClick={() => {
                search();
              }}
            />
            <input
              type="text"
              placeholder="Search "
              className="rounded-2xl border-pink-400 border-2 lg:flex-1 w-32 lg:w-48 focus:ring-pink-400 focus:outline-none pl-2 hidden lg:inline"
            />
            <FaFilter className="inline lg:hidden text-pink-400 lg:ml-32" />
            <select
              name=""
              id=""
              className="hidden lg:inline rounded-2xl border-pink-400 border-2 lg:flex-1 w-32 lg:w-48 text-gray-500 focus:outline-none"
            >
              <option value="" className="hover:bg-pink-400">
                Filter
              </option>
              <option value="">Status</option>
              <option value="">Color</option>
            </select>
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
      <div
        className={`fixed inset-0 bg-black/75 items-center justify-center z-50 lg:hidden ${
          mobileSearch ? "flex" : "hidden"
        }`}
      >
        <div className="flex ">
          <input
            type="text"
            className="border-b-2 border-pink-400 focus:outline-none focus:ring-0 focus:border-pink-400 text-pink-400"
          />
          <FaSearch className="text-pink-400 text-3xl" />
        </div>
      </div>
      <Toaster
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 15000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
