const ProductCard = ({ viewDetails, item, className = "" }) => {
  return (
    <div
      key={item._id}
      className={` w-full aspect-square  bg-white shadow-md rounded-lg overflow-hidden pb-2 ${className}`}
    >
      {/* Top pink design line */}
      <div className="w-full h-2 bg-pink-400 mb-2" />

      {/* Content */}
      <div className="lg:relative  group p-4 h-full w-full flex flex-col items-center justify-center text-center overflow-y-auto">
        {item.image && (
          <img
            src={item.image}
            alt={item.productName}
            className="w-36 h-36 object-cover mb-2 group-hover:opacity-25 lg:pointer-events-none"
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
        {item.productName && (
          <p className="font-bold text-lg">{item.productName}</p>
        )}
        {item.price && <p className="text-sm">{item.price} </p>}

        <p
          className={`italic ${
            item.availability ? "text-green-400" : "text-gray-400"
          }`}
        >
          {item.availability ? "Available" : "Reserved for: "}
          {item.dateReserved && (
            <span className="text-sm">{item.dateReserved}</span>
          )}
        </p>
      </div>
    </div>
  );
};
export default ProductCard;
