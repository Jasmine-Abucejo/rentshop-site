const ProductCard = ({ title, image, price, status, className = "" }) => {
  return (
    <div
      className={` w-full aspect-square  bg-white shadow-md rounded-lg overflow-hidden pb-2 ${className}`}
    >
      {/* Top pink design line */}
      <div className="w-full h-2 bg-pink-400 mb-2" />

      {/* Content */}
      <div className="lg:relative  group p-4 h-full w-full flex flex-col items-center justify-center text-center overflow-y-auto">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-auto h-2/3 object-contain mb-2 group-hover:opacity-25"
          />
        )}
        <button
          className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-pink-400 text-white px-4 py-2 rounded
               opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
               transition duration-300 z-10"
        >
          See Full Details
        </button>
        {title && <p className="font-bold text-lg">{title}</p>}
        {price && (
          <p className="text-sm">
            {price} <span className="italic text-gray-400">{status}</span>
          </p>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
