import { FaCartPlus, FaEye, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const DollCard = ({ doll }) => {
  return (
    <div className="group space-y-4">
      <div className="relative overflow-hidden shadow-2xl rounded-3xl">
        <img
          src={doll.picture}
          alt=""
          className=" object-cover h-[400px] w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 "></div>{" "}
        <Link to={`/doll/${doll._id}`} className="bg-blue-500 text-white  py-2 px-4 rounded-full transition-all duration-700 absolute left-1/2 -translate-x-1/2 -bottom-full group-hover:bottom-4 flex items-center justify-between gap-3">
          View   <FaEye />
        </Link>
        <div className="transition-all duration-700 absolute top-4 -right-full group-hover:right-4  flex items-center flex-col gap-2">
          <button className="bg-white text-blue-500  w-12 h-12 shadow shadow-blue-300 py-2 px-4 rounded-full  flex items-center justify-between gap-3">
          <FaCartPlus />
          </button>
          <button className="bg-white text-blue-500 w-12 h-12 shadow shadow-blue-300  py-2 px-4 rounded-full flex items-center justify-between gap-3">
            <FaHeart />
          </button>
        </div>
      </div>
      <h4 className="text-[#02224d] hover:text-blue-500 duration-500 text-xl md:text-2xl font-bold">
        {doll.name}
      </h4>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-blue-500">${doll.price}</p>
        <p className="text-2xl flex items-center gap-2">
          {doll.rating}{" "}
          <span className="text-yellow-500">
            <FaStar />
          </span>
        </p>
      </div>
    </div>
  );
};

export default DollCard;
