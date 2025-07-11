import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 lg:left-0 z-50 bg-pink-400 flex lg:w-32 lg:h-full w-full h-16 lg:justify-center p-4">
      <Link to="/">
        <div className="font-bold">Home</div>
      </Link>
    </div>
  );
};
export default Navbar;
