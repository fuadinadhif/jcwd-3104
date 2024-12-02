interface Prop {
  product: {
    image: {
      thumbnail: string;
      tablet: string;
      mobile: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

export default function ProductCard(prop: Prop) {
  return (
    <div>
      {/* Image Container */}
      <div className="rounded-lg overflow-hidden">
        {/* Public Version */}
        <img src={prop.product.image.desktop} alt="Product image" />

        {/* Assets Version */}
        {/* <img src={cakeImage} alt="" /> */}
      </div>

      <button className="flex border border-our-rose-400 gap-2 py-2 px-6 rounded-full mx-auto -mt-5 bg-white z-10 relative">
        <img src="/icon-add-to-cart.svg" alt="" />
        <span className="text-sm">Add to cart</span>
      </button>

      {/* Text Container */}
      <div className="font-medium mt-2">
        <span className="text-our-rose-300 text-sm">
          {prop.product.category}
        </span>
        <h3 className=" text-our-rose-900">{prop.product.name}</h3>
        <span className="text-red">${prop.product.price}</span>
      </div>
    </div>
  );
}
