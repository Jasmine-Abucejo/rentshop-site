import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useProductStore } from "../store/productStore";
import toast from "react-hot-toast";

const RentPage = () => {
  const { addClient, requestProduct } = useProductStore();
  const location = useLocation();
  const productData = location.state?.item;
  const [inputDate, setInputDate] = useState("");
  const [newClient, setNewClient] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    dateNeeded: "",
    status: "pending request",
  });
  const handleDateChange = (inputValue) => {
    setInputDate(inputValue);
    const dateObj = new Date(inputValue); // inputValue is in YYYY-MM-DD
    const formattedDate = `${String(dateObj.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(dateObj.getDate()).padStart(2, "0")}-${dateObj.getFullYear()}`;

    setNewClient((prev) => ({
      ...prev,
      dateNeeded: formattedDate,
    }));
  };

  const saveClient = async () => {
    const { success, message } = await addClient(productData?._id, newClient);

    setNewClient({
      firstName: "",
      lastName: "",
      mobile: "",
      dateNeeded: "",
    });
    setInputDate("");
    if (success) {
      toast.success(
        "Your request to rent this item has been sent. Kindly wait for the owner confirmation"
      );
    } else {
      toast.error(message);
    }
  };
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
          <label htmlFor="">First Name: </label>
          <input
            value={newClient.firstName}
            onChange={(e) =>
              setNewClient({ ...newClient, firstName: e.target.value })
            }
            type="text"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          <label htmlFor="">Last Name: </label>
          <input
            value={newClient.lastName}
            onChange={(e) =>
              setNewClient({ ...newClient, lastName: e.target.value })
            }
            type="text"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          {/* <label htmlFor="">Adress: </label>
          <input
            type="text"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          /> */}
          <label htmlFor="">Contact No: </label>
          <input
            value={newClient.mobile}
            onChange={(e) =>
              setNewClient({ ...newClient, mobile: e.target.value })
            }
            type="tel"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          {/* <label htmlFor="">Email: </label>
          <input
            value={newClient.email}
            onChange={setNewClient({ ...newClient, email: e.target.value })}
            type="email"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          /> */}
          <label htmlFor="">Date Needed: </label>
          <input
            value={inputDate}
            onChange={(e) => handleDateChange(e.target.value)}
            type="date"
            className="border-b-2 focus:outline-none focus:ring-0 focus:border-black col-span-2"
          />
          <button
            className="bg-pink-400 p-2 w-full rounded-lg mt-8 font-bold col-span-3"
            onClick={saveClient}
          >
            Submit Rent Application
          </button>
        </div>
      </div>
    </div>
  );
};
export default RentPage;
