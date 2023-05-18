
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SliderButton = ({ onClick, label }) => {
  return label === "next" ? (
    <div
      className="absolute  top-1/2 right-0 me-12 -translate-y-1/2   z-10 custom-button next-slide-button text-2xl text-transparent group-hover:text-slate-900 transition-all duration-300 w-12 h-12 rounded-full group-hover:hover:bg-emerald-200 group-hover:bg-slate-200 bg-transparent  flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-200"
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  ) : (
    <div
      className="absolute  top-1/2 left-0 ms-12 -translate-y-1/2   z-10 custom-button next-slide-button text-2xl text-transparent group-hover:text-slate-900 transition-all duration-300 w-12 h-12 rounded-full group-hover:bg-slate-200 group-hover:hover:bg-emerald-200 bg-transparent  flex items-center justify-center  group-hover:shadow-lg group-hover:shadow-emerald-200"
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
};

export default SliderButton;
