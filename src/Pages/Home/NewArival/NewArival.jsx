import { FaCartPlus, FaEye, FaHeart, FaStar } from "react-icons/fa";
import SectionTitle from "../../../Share/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const NewArival = ({ item1, item2 }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-8 overflow-x-auto">
      <SectionTitle
        title="New Arrival"
        subtitle="Our Colors Matching Your Different Moods."
      />
      <div className="grid md:grid-cols-2 gap-4 mx-2">
        <div data-aos="fade-right" data-aos-duration="1000" className="flex items-center flex-col-reverse md:flex-row ">
          <div className="shadow-xl p-4 rounded-s-xl md:flex-1 space-y-3">
            <h3 className="text-xl font-bold md:text-3xl text-slate-800">
              {item1?.name}
            </h3>
            <p className="text-2xl flex items-center gap-2">
              Rating: {item1?.rating}{" "}
              <span className="text-yellow-500">
                <FaStar />
              </span>
            </p>
            <p className="text-indigo-600 text-xl font-bold">
              $ {item1?.price}{" "}
              <span className="ms-2 text-gray-500 inline-block line-through ">
                $ {parseInt(item1?.price) + 5}
              </span>
            </p>
            <div className="flex gap-3 border rounded-full py-1 px-3 justify-center my-4 ">
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 46 }}></span>
                </span>
                sec
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 my-4">
              <Link
                to={`/doll/${item1?._id}`}
                className="hover:bg-blue-500 hover:text-white bg-white text-blue-500  w-12 h-12 shadow shadow-blue-300 py-2 px-4 rounded-full  flex items-center justify-between gap-3"
              >
                {" "}
                <FaEye />
              </Link>
              <button className="hover:bg-blue-500 hover:text-white bg-white text-blue-500  w-12 h-12 shadow shadow-blue-300 py-2 px-4 rounded-full  flex items-center justify-between gap-3">
                <FaCartPlus />
              </button>
              <button className="hover:bg-blue-500 hover:text-white bg-white text-blue-500 w-12 h-12 shadow shadow-blue-300  py-2 px-4 rounded-full flex items-center justify-between gap-3">
                <FaHeart />
              </button>
            </div>
          </div>
          <div className="shadow-xl">
            <img
              src={item1?.picture}
              alt=""
              className="h-[400px] md:h-[360px] md:w-[270px] rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
        {/* item 2 */}
        <div data-aos="fade-left" data-aos-duration="1000" className="flex items-center flex-col-reverse md:flex-row ">
          <div className="shadow-xl p-4 rounded-s-xl md:flex-1 space-y-3">
            <h3 className="text-xl font-bold md:text-3xl text-slate-800">
              {item2?.name}
            </h3>
            <p className="text-2xl flex items-center gap-2">
              Rating: {item2?.rating}{" "}
              <span className="text-yellow-500">
                <FaStar />
              </span>
            </p>
            <p className="text-indigo-600 text-xl font-bold">
              $ {item2?.price}{" "}
              <span className="ms-2 text-gray-500 inline-block line-through ">
                $ {parseInt(item2?.price) + 5}
              </span>
            </p>
            <div className="flex gap-3 border rounded-full py-1 px-3 justify-center my-4 ">
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-3xl">
                  <span style={{ "--value": 46 }}></span>
                </span>
                sec
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 my-4">
              <Link
                to={`/doll/${item2?._id}`}
                className="hover:bg-blue-500 hover:text-white bg-white text-blue-500  w-12 h-12 shadow shadow-blue-300 py-2 px-4 rounded-full  flex items-center justify-between gap-3"
              >
                {" "}
                <FaEye />
              </Link>
              <button className="hover:bg-blue-500 hover:text-white bg-white text-blue-500  w-12 h-12 shadow shadow-blue-300 py-2 px-4 rounded-full  flex items-center justify-between gap-3">
                <FaCartPlus />
              </button>
              <button className="hover:bg-blue-500 hover:text-white bg-white text-blue-500 w-12 h-12 shadow shadow-blue-300  py-2 px-4 rounded-full flex items-center justify-between gap-3">
                <FaHeart />
              </button>
            </div>
          </div>
          <div className="shadow-xl">
            <img
              src={item2?.picture}
              alt=""
              className="h-[400px] md:h-[360px] md:w-[270px] rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArival;
