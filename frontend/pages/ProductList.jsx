import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { useProductStore } from "../store/productStore";
import { useNavigate, useLocation } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fetchProducts, products } = useProductStore();
  // const products = useProductStore((state) => state.products);
  // const fetchProducts = useProductStore((state) => state.fetchProducts);
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  const productItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg",
      title: "Wistoria Dress",
      price: "$100",
      status: "available",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg",

      title: "Russian Pink Dress",
      price: "$300",
      status: "reserved",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg",
      title: "White Floral Sleeveless Wedding Gown",
      price: "$500",
      status: "available",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/19501281/pexels-photo-19501281.jpeg",
      title: "Sweater and Coat",
      price: "$50",
      status: "reserved",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/15791203/pexels-photo-15791203.jpeg",
      title: "Evening Dress",
      price: "$150",
      status: "available",
    },
  ];
  const viewDetails = (e, id, item) => {
    navigate(`/image/${id}`, {
      state: { backgroundLocation: location, item: item },
    });
  };
  return (
    // <div>
    //   <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-4">
    //     {productItems.map((productItem) => (
    //       <ProductCard
    //         key={productItem.id}
    //         item={productItem}
    //         viewDetails={viewDetails}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            item={product}
            viewDetails={viewDetails}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
