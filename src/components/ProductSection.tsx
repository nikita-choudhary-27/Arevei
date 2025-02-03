import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "../assets/store/p1.png";
import p2 from "../assets/store/p2.png";
import p3 from "../assets/store/p3.png";
import p4 from "../assets/store/p4.jpeg";

interface Product {
  title: string;
  price: string;
  imageUrl: string;
  isHot?: boolean;
}

const products: Product[] = [
  { title: "Galaxy Watch 7", price: "$749", imageUrl: p1, isHot: true },
  { title: "Casual Shirt for Men", price: "$749", imageUrl: p2 },
  {
    title: "Prompt Engineering Class",
    price: "$749",
    imageUrl: p3,
    isHot: true,
  },
  { title: "Winister Sofa", price: "$749", imageUrl: p4 },
];

const ProductSection: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Explore Our Featured Products</h2>
          <div className="flex space-x-3">
            <button
              onClick={() => scroll("left")}
              className="bg-black border border-gray-400 text-white p-1.5 rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-lime-500 text-black p-1.5 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-black rounded-2xl relative"
            >
              {product.isHot && (
                <span className="absolute top-4 left-4 bg-lime-400 text-black px-3 py-1 text-sm font-semibold rounded-xl">
                  Hot
                </span>
              )}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="rounded-xl w-[250px] h-[250px] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
              <p className="text-lime-400">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
