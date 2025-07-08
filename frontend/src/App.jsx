import Navbar from "../components/Navbar";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

import ProductList from "../pages/ProductList";

function App() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <Navbar />
      <div className="w-full h-full lg:ml-32 ">
        <div className="w-full h-1/14 lg:h-1/7 bg-gray-100/50 flex justify-between p-4">
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
        <ProductList />
      </div>
    </div>
  );
}

export default App;
