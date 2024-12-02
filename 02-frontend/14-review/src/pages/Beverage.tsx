import ProductCard from "../components/ProductCard";
import beverage from "../data/beverage.json";

export default function Beverage() {
  return (
    <>
      <h2 className="text-4xl font-bold text-our-rose-900 mb-10">Beverage</h2>
      <div className="grid grid-cols-3 gap-y-7 gap-x-5">
        {beverage.map((element) => {
          return <ProductCard product={element} />;
        })}
      </div>
      ;
    </>
  );
}
