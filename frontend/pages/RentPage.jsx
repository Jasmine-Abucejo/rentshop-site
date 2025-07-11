import { useLocation } from "react-router-dom";

const RentPage = () => {
  const location = useLocation();
  const productData = location.state?.item;
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4 lg:justify-between ">
      <div className="bg-white flex flex-1 flex-col gap-2  rounded-lg w-4/5 shadow-lg lg:w-1/2 h-4/5 items-center justify-center text-center ml-10 lg:ml-0">
        <div className="w-full h-2 bg-pink-400 mb-2 rounded-t-lg" />
        <div className="flex lg:flex-row flex-col  gap-4 w-auto h-9/10 items-center justify-center text-center m-4">
          <img
            src={productData?.image}
            alt={productData?.title}
            className="h-3/5 w-3/4 object-contain"
          />
          <div className="text-left">
            {" "}
            <p>
              Name: <span className="font-bold">{productData?.title}</span>
            </p>
            <p>
              Size: <span className="font-bold">S</span>
            </p>
            <p>Length: </p>
            <p>Waist: </p>
            <p>Material: </p>
            <p>Color:</p>
            <p>
              Price: <span className="font-bold">{productData?.price}</span>
            </p>
            <p>
              Status: <span className="font-bold">{productData?.status}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex-1   flex flex-col">
        <p className="font-bold text-2xl mb-8">Client Data Form</p>
        <div className="grid grid-cols-3 text-left">
          <label htmlFor="">Full Name: </label>
          <input
            type="text"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          <label htmlFor="">Adress: </label>
          <input
            type="text"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          <label htmlFor="">Contact No: </label>
          <input
            type="tel"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          <label htmlFor="">Email: </label>
          <input
            type="email"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          <label htmlFor="">Date Needed: </label>
          <input
            type="date"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          <button className="bg-pink-400 p-2 w-full rounded-lg mt-8 font-bold col-span-3">
            Submit Rent Application
          </button>
        </div>
      </div>
    </div>
  );
};
export default RentPage;
