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
        className="absolute left-10 top-10 text-5xl text-white "
        onClick={handleClose}
      />
      <div className="bg-white p-4 flex flex-col gap-2  rounded-lg shadow-lg w-1/2 h-4/5 items-center justify-center text-center">
        <div className="w-full h-2 bg-pink-400 mb-2" />
        <div className="flex  gap-4 w-auto h-9/10 items-center justify-center text-center">
          <img
            src={imageData?.image}
            alt={imageData?.title}
            className="h-3/5 min-w-1/2 object-contain"
          />
          <div>
            {" "}
            <p>
              Name: <span className="font-bold">{imageData?.title}</span>
            </p>
            <p>
              Size: <span className="font-bold">S</span>
            </p>
            <p>Length: </p>
            <p>Waist: </p>
            <p>Material: </p>
            <p>
              Price: <span className="font-bold">{imageData?.price}</span>
            </p>
            <p>
              Status: <span className="font-bold">{imageData?.status}</span>
            </p>
          </div>
        </div>
        <button
          className={`${
            imageData?.status === "reserved"
              ? "opacity-50 pointer-events-none bg-gray-300 p-2 rounded-lg mb-8 w-md"
              : "opacity-100 pointer-events-auto bg-pink-400 p-2 rounded-lg mb-8 w-md"
          }`}
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
