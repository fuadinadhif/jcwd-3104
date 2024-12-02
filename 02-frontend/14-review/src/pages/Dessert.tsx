// import cakeImage from "./assets/image-cake-desktop.jpg";
import ProductCard from "../components/ProductCard";
import dessert from "../data/dessert.json";

export default function Dessert() {
  return (
    <>
      <h2 className="text-4xl font-bold text-our-rose-900 mb-10">Desserts</h2>
      <div className="grid grid-cols-3 gap-y-7 gap-x-5">
        {dessert.map((element) => {
          return <ProductCard product={element} />;
        })}
      </div>
      ;
    </>
  );
}
