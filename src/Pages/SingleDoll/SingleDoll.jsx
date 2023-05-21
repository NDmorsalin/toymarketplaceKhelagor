import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SingleDoll = () => {
  const doll = useLoaderData();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-auto md:w-1/2">
      <div className="">
        <img
          src={doll.picture}
          alt={doll.name}
          className="mx-auto mb-4 w-64 h-64 shadow-lg object-contain rounded-lg"
        />
      </div>
      <h2 className="text-3xl font-bold mb-2">{doll.name}</h2>
      <p className="text-gray-500 mb-4">
        Seller: {doll.seller.sellerName} ({doll.seller.sellerEmail})
      </p>
      <p className="text-gray-700 mb-2">
        <span className="text-lg font-bold">Price: ${doll.price}</span>
      </p>
      <div className="flex items-center mb-4">
        <p className="text-gray-700 mr-2">Rating:</p>
        <span className="text-3xl text-yellow-500">
          <FaStar />
        </span>
        <p className="text-gray-700 ml-2">({doll.rating}/5)</p>
      </div>
      <p className="text-gray-700 mb-2">Available Quantity: {doll.quantity}</p>
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-2xl font-bold mb-2">Detail Description</h3>
        <p className="text-gray-700">{doll.details}</p>
      </div>
    </div>
  );
};

export default SingleDoll;
