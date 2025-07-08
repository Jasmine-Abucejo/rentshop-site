import ProductCard from "../components/ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      {" "}
      <ProductCard
        image={
          "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg"
        }
        title={"Wistoria Dress"}
        price={"$100"}
        status={"available"}
      />
      <ProductCard
        image={
          "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg"
        }
        title={"Russian Pink Dress"}
        price={"$300"}
        status={"reserved"}
      />
      <ProductCard
        image={
          "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
        }
        title={"White Floral Sleeveless Wedding Gown"}
        price={"$500"}
        status={"available"}
      />
      <ProductCard
        image={
          "https://images.pexels.com/photos/19501281/pexels-photo-19501281.jpeg"
        }
        title={"Sweater and Coat"}
        price={"$50"}
        status={"reserved"}
      />
      <ProductCard
        image={
          "https://images.pexels.com/photos/15791203/pexels-photo-15791203.jpeg"
        }
        title={"Evening Dress"}
        price={"$150"}
        status={"available"}
      />
    </div>
  );
};
export default ProductList;
