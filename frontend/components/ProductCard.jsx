import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Popover } from "react-tiny-popover";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ viewDetails, item, className = "" }) => {
  // const [selected, setSelected] = useState(item.reservationDates);
  const selected = item.reservationDates;
  const formatDate = (dateObj) => {
    // Ensure it's a Date object
    const date = new Date(dateObj);

    // Get ISO string: "2025-07-30T00:00:00.000Z"
    // Split at "T" → take only the first part
    return date.toISOString().split("T")[0];
  };
  const formattedDates = selected.map((dateObj) => formatDate(dateObj));
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["right", "left"]} // preferred positions by priority
      onClickOutside={() => setIsPopoverOpen(false)}
      content={
        <DayPicker
          animate
          mode="multiple"
          selected={formattedDates}
          className="m-8 top-15 border-2 p-2 z-50 bg-white"
          // onSelect={setSelected}
          footer={`Rented Dates for: ${item.productName}`}
        />
      }
    >
      <div
        key={item._id}
        className={` w-full aspect-auto bg-white shadow-md rounded-lg overflow-hidden pb-2 ${className}`}
      >
        {/* Top pink design line */}
        <div className="w-full h-2 bg-pink-400 " />

        {/* Content */}
        <div className="lg:relative  group  h-full w-full flex flex-col   overflow-y-auto">
          {item.image && (
            <img
              src={item.image}
              alt={item.productName}
              className="w-full h-3/4 object-cover mb-2 group-hover:opacity-25 lg:pointer-events-none"
              onClick={(e) => viewDetails(e, item.id, item)}
            />
          )}
          <button
            id={item._id}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-pink-400 text-white px-4 py-2 rounded
               opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
               transition duration-300 z-10"
            onClick={(e) => viewDetails(e, item._id, item)}
          >
            See Full Details
          </button>
          <div className="p-2">
            <div className="flex justify-between">
              {item.productName && (
                <span className="font-bold text-lg "> {item.productName}</span>
              )}

              {item.price && <span className="text-sm">{item.price} </span>}
            </div>

            <p className="text-gray-400 italic">
              See rented dates:{""}
              <FaCalendarAlt
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                className="inline"
              />
            </p>
          </div>
        </div>
      </div>
    </Popover>
  );
};
export default ProductCard;
