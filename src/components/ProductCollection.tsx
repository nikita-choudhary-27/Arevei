import React from "react";
import p1 from "../assets/store/p1.png";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Galaxy Watch 7",
    price: "$749",
    image: p1
  },
  {
    id: 2,
    name: "Galaxy Watch 7",
    price: "$749",
    image: p1
  },
    {
        id: 3,
        name: "Galaxy Watch 7",
        price: "$749",
        image: p1
    },
  {
    id: 4,
    name: "Galaxy Watch 7",
    price: "$749",
    image: p1,
  },
];

const ProductCollection: React.FC = () => {
  return (
    <div className=" mb-8 bg-black text-white py-10 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold">Shop Our</h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Physical Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black rounded-2xl flex flex-col "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-medium mt-4">{product.name}</h3>
            <p className="text-lime-400 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-black border-2 border-lime-400 text-lime-400 px-6 py-2 rounded-full hover:bg-lime-400 hover:text-black transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCollection;
