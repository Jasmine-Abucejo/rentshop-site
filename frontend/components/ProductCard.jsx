import { Popover } from "react-tiny-popover";
import { FaClipboardList } from "react-icons/fa";
import { useState } from "react";
import { Textfit } from "react-textfit";

const ProductCard = ({ viewDetails, item, className = "" }) => {
  const reservationDates = item.reservationDates;
  const returnDates = item.returnDates;
  console.log(returnDates);
  const formatDate = (dateObj) => {
    // Ensure it's a Date object
    const date = new Date(dateObj);

    // Get ISO string: "2025-07-30T00:00:00.000Z"
    // Split at "T" → take only the first part
    return date.toISOString().split("T")[0];
  };
  const formattedReturnDates = returnDates.map((dateObj) =>
    formatDate(dateObj)
  );
  const formattedReservationDates = reservationDates.map((dateObj) =>
    formatDate(dateObj)
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div
      key={item._id}
      className={`w-full h-100 bg-white shadow-md rounded-lg overflow-hidden pb-2 ${className}`}
    >
      {/* Top pink design line */}
      <div className="w-full h-2 bg-pink-400" />

      {/* Content */}
      <div className="group relative h-full w-full flex flex-col">
        {/* Image section */}
        {item.image && (
          <img
            src={item.image}
            alt={item.productName}
            className="w-full h-3/4 object-cover  group-hover:opacity-25 lg:pointer-events-none"
            onClick={(e) => viewDetails(e, item.id, item)}
          />
        )}

        {/* Hover Button */}
        <button
          id={item._id}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-pink-400 text-white px-4 py-2 rounded
                 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                 transition duration-300 z-10"
          onClick={(e) => viewDetails(e, item._id, item)}
        >
          See Full Details
        </button>

        {/* Bottom text + popover */}
        <div className="flex-1 flex flex-col justify-between p-2">
          <div className="flex justify-between items-center flex-1">
            {item.productName && (
              <Textfit
                mode="multi"
                min={10}
                max={24}
                className="font-bold text-left leading-tight flex-1"
              >
                {item.productName}
              </Textfit>
            )}

            {item.price && (
              <span className="text-sm whitespace-nowrap ml-2">
                {item.price}
              </span>
            )}
          </div>

          <Popover
            isOpen={isPopoverOpen}
            positions={["right", "left"]}
            align="center"
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
              <div className="bg-white border-2 z-50">
                <div className="border-b-2 bg-pink-400 p-2">
                  Rented dates for {item.productName}
                </div>
                <div className="p-2">
                  {formattedReservationDates?.length > 0 ? (
                    formattedReservationDates.map((date, index) => (
                      <p key={index}>
                        ➤ {date} - {formattedReturnDates[index]}
                      </p>
                    ))
                  ) : (
                    <p>No rented date for this item yet</p>
                  )}
                </div>
              </div>
            }
          >
            <p className="text-gray-400 italic text-center mt-1">
              See unavailable dates:{" "}
              <FaClipboardList
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                className="inline cursor-pointer"
              />
            </p>
          </Popover>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
