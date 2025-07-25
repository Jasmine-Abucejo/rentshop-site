import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ImageModal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const imageData = location.state?.item;

  const handleClose = () => navigate(-1); // Go back to the background
  const rentItem = (id, item) =>
    navigate(`/rent/${id}`, {
      state: { item: item },
    });

  return (
    <div className="fixed inset-0 bg-black/75  flex items-center justify-center z-50">
      <IoMdCloseCircleOutline
        className="absolute lg:left-30 left-10 lg:top-10 top-20 text-5xl text-white "
        onClick={handleClose}
      />
      <div className="bg-white  flex flex-col gap-2  rounded-lg shadow-lg lg:w-1/2 lg:h-4/5 w-4/5 items-center justify-center text-center">
        <div className="w-full h-2 bg-pink-400 mb-2 rounded-t-lg" />
        <div className="flex flex-col lg:flex-row  gap-4 w-auto h-9/10 items-center justify-center">
          <img
            src={imageData?.image}
            alt={imageData?.productName}
            className="w-64 h-64 object-cover rounded ml-4"
          />
          <div className="text-left p-4">
            {" "}
            <p>
              Name: <span className="font-bold">{imageData?.productName}</span>
            </p>
            <p>
              Size: <span className="font-bold">{imageData?.size}</span>
            </p>
            <p>Length: </p>
            <p>Waist: </p>
            <p>
              Material:<span className="font-bold">{imageData?.material}</span>{" "}
            </p>
            <p>
              Color: <span className="font-bold">{imageData?.color}</span>
            </p>
            <p>
              Price: <span className="font-bold">{imageData?.price}</span>
            </p>
            <p>
              Status:{" "}
              <span className="font-bold">
                {imageData?.availability ? "Available" : "Reserved for:"}
              </span>
              {imageData?.dateReserved && (
                <span className="text-sm">{imageData?.dateReserved}</span>
              )}
            </p>
          </div>
        </div>
        <button
          className="opacity-100 pointer-events-auto bg-pink-400 p-2 rounded-lg mb-8 lg:w-md w-xs"
          onClick={() => {
            rentItem(id, imageData);
          }}
        >
          Rent
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
