import { getProduct } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetails({ params }: any) {
    const {id} = await params
  const product = await getProduct(id);
  return (
    <div className="p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/*  IMAGE */}
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-3xl shadow-lg flex justify-center">
          <img
            src={product.images}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain hover:scale-110 transition duration-300"
          />
        </div>

        {/*  DETAILS */}
        <div className="space-y-5">
          
          {/* title */}
          <h1 className="text-3xl md:text-4xl font-extrabold">
            {product.title}
          </h1>

          {/* category */}
          <p className="text-sm text-gray-500 capitalize">
            {product.category}
          </p>

          {/* rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span>{product.rating?.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating?.count} reviews)
            </span>
          </div>

          {/* description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          {/* price */}
          <h2 className="text-3xl font-bold text-indigo-600">
            ${product.price}
          </h2>

          {/* actions */}
          <div className="flex gap-4 items-center">
            <AddToCartButton product={product} />

          </div>
        </div>
      </div>
    </div>
  );
}