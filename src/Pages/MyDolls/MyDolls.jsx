import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Share/Loading/Loading";
import Pagination from "../../Share/Pagination/Pagination";
import SearchField from "../../Share/SeachField/SearchField";
import { useAuth } from "../../Provider/AuthProvider";
import DollRow from "./DollRow/DollRow";

const MyDolls = () => {
  const [dolls, setDolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDolls, setTotalDolls] = useState(0);
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { user } = useAuth();
  // console.log(user?.email);
  useEffect(() => {
    setLoading(true);
    const fetchDolls = async () => {
      const res = await axios.get(
        `https://khelagorbackend.vercel.app/api/mydolls?limit=${limit}&page=${currentPage}&email=${user?.email}&search${search}}`
      ); //todo change to live server
      setDolls(res.data.dolls);
      setTotalDolls(res.data.totalDolls);
      setLoading(false);
    };
    fetchDolls();
  }, [limit, currentPage]);

  const handleAscending = async () => {
    const res = await axios.get(
      `https://khelagorbackend.vercel.app/api/mydolls?limit=${limit}&page=${currentPage}&email=${user?.email}&search${search}}&sort=asc`
    ); //todo change to live server
    setDolls(res.data.dolls);
    setTotalDolls(res.data.totalDolls);
    setLoading(false);
  };
  const handleDescending = async () => {
    const res = await axios.get(
      `https://khelagorbackend.vercel.app/api/mydolls?limit=${limit}&page=${currentPage}&email=${user?.email}&search${search}}&sort=desc`
    ); //todo change to live server
    setDolls(res.data.dolls);
    setTotalDolls(res.data.totalDolls);
    setLoading(false);
  };
  const totalPage = Math.ceil(totalDolls / limit);
  // const pageNum = [...Array(totalPage).keys()];
  return (
    <>
      <h1 className="text-3xl text-center font-semibold text-gray-800 my-8">
        My Added Dolls
      </h1>
      <SearchField
        setTotalDolls={setTotalDolls}
        setDolls={setDolls}
        setLoading={setLoading}
        setSearch={setSearch}
      />
      <div className="container px-8 mx-auto my-8">
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
                  <th>Doll Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {dolls.map((doll) => (
                  <DollRow
                    dolls={dolls}
                    setDolls={setDolls}
                    doll={doll}
                    key={doll._id}
                  />
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr className="hover">
                  <th>Doll Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Update</th>
                  <th>Delete</th>
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

export default MyDolls;
