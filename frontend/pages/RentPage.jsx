import { useLocation } from "react-router-dom";

const RentPage = () => {
  const location = useLocation();
  const productData = location.state?.item;
  return (
    <div>
      <p>{productData?.title}</p>
    </div>
  );
};
export default RentPage;
