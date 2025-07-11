const ProductCard = ({ viewDetails, item, className = "" }) => {
  return (
    <div
      key={item.id}
      className={` w-full aspect-square  bg-white shadow-md rounded-lg overflow-hidden pb-2 ${className}`}
    >
      {/* Top pink design line */}
      <div className="w-full h-2 bg-pink-400 mb-2" />

      {/* Content */}
      <div className="lg:relative  group p-4 h-full w-full flex flex-col items-center justify-center text-center overflow-y-auto">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-36 h-36 object-cover mb-2 group-hover:opacity-25 lg:pointer-events-none"
            onClick={(e) => viewDetails(e, item.id, item)}
          />
        )}
        <button
          id={item.id}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-pink-400 text-white px-4 py-2 rounded
               opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
               transition duration-300 z-10"
          onClick={(e) => viewDetails(e, item.id, item)}
        >
          See Full Details
        </button>
        {item.title && <p className="font-bold text-lg">{item.title}</p>}
        {item.price && (
          <p className="text-sm">
            {item.price}{" "}
            <span className="italic text-gray-400">{item.status}</span>
          </p>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
