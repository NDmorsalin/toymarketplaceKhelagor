import { useEffect, useState } from "react";
import DollRow from "./DollRow/DollRow";
import axios from "axios";
import Loading from "../../Share/Loading/Loading";
import Pagination from "../../Share/Pagination/Pagination";
import SearchField from "../../Share/SeachField/SearchField";

const AllDolls = () => {
  const [dolls, setDolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDolls, setTotalDolls] = useState(0);
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  // console.log(search);
  useEffect(() => {
    setLoading(true);
    const fetchDolls = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/dolls?limit=${limit}&page=${currentPage}&search=${search}`
      ); //todo change to live server
      setDolls(res.data.dolls);
      setTotalDolls(res.data.totalDolls);
      setLoading(false);
    };
    fetchDolls();
  }, [limit, currentPage]);

  const handleAscending = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/dolls?limit=${limit}&page=${currentPage}&search=${search}&sort=asc`
    ); //todo change to live server
    setDolls(res.data.dolls);
    setTotalDolls(res.data.totalDolls);
    setLoading(false);
  };
  const handleDescending = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/dolls?limit=${limit}&page=${currentPage}&search=${search}&sort=desc`
    ); //todo change to live server
    setDolls(res.data.dolls);
    setTotalDolls(res.data.totalDolls);
    setLoading(false);
  };

  const totalPage = Math.ceil(totalDolls / limit);
  // console.log(totalPage);
  // const pageNum = [...Array(totalPage).keys()];
  return (
    <>
      <div className="container px-8 mx-auto my-8">
        <h1 className="text-3xl text-center font-semibold text-gray-800">
          All Dolls
        </h1>
        <SearchField
          setTotalDolls={setTotalDolls}
          setDolls={setDolls}
          setLoading={setLoading}
          setSearch={setSearch}
        />
        {/* sort by ascending and descending */}
        <div className="flex items-center gap-4">
          <button onClick={handleAscending} className="btn btn-info">
            Ascending
          </button>
          <button onClick={handleDescending} className="btn btn-primary">
            Descending
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full container px-8 mx-auto my-8">
        {loading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          <div className="">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="hover">
                  <th>Seller</th>
                  <th>Doll Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {dolls.map((doll) => (
                  <DollRow doll={doll} key={doll._id} />
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr className="hover">
                  <th>Seller</th>
                  <th>Doll Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>View Details</th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex items-center justify-center gap-2">
          <p className="">Page Limit</p>
          <select
            defaultValue={limit}
            className="border border-gray-300 rounded-md text-gray-500 text-sm"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AllDolls;
