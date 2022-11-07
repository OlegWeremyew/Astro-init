import { IProduct } from "../types";
import { useState } from "preact/hooks";

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  const [details, setDetails] = useState(false);

  const toodleDescriptionVisibility = () => {
    setDetails((prev) => !prev);
  };

  return (
    <div className="border rounded mb-2 p-3">
      <h2 className="text-lg">{product.title}</h2>
      <p className="font-bold">{product.price}</p>
      <a href={`product/${product.id}`}>Open product</a>
      <br />
      <button
        onClick={toodleDescriptionVisibility}
        type="button"
        className="border py-2 px-4 bg-yellow-400 text-white"
      >
        Toggle description
      </button>
      {details && <p>{product.description}</p>}
    </div>
  );
}
