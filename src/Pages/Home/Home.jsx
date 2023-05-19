import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Doll from "./Doll/Doll";
import Gallery from "./Gallery/Gallery";
import axios from "axios";

const Home = () => {
  const [dolls, setDolls] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchDolls = async () => {
      const res = await axios.get("http://localhost:5000/api/dolls"); //todo change to live server
      setDolls(res.data.dolls);
      setLoading(false)
      const subCtg = [];
      res.data.dolls.map((doll) => {
        if (!subCtg.includes(doll.subcategory)) {
          subCtg.push(doll.subcategory);
        }
      });
      setSubcategory(subCtg);
      console.log(res.data);
    };
    fetchDolls();
  }, []);
  return (
    <div>
      <Banner />
      <Gallery dolls={dolls} loading={loading}/>
      <Doll dolls={dolls} loading={loading} subcategory={subcategory} />
    </div>
  );
};

export default Home;
