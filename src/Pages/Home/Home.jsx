import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Doll from "./Doll/Doll";
import Gallery from "./Gallery/Gallery";
import axios from "axios";

const Home = () => {
  const [dolls, setDolls] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  
  useEffect(() => {
    const fetchDolls = async () => {
      const res = await axios.get("http://localhost:5000/api/dolls"); //todo change to live server
      setDolls(res.data);
      const subCtg = [];
      res.data.map((doll) => {
        if (!subCtg.includes(doll.subcategory)) {
          subCtg.push(doll.subcategory);
        }
      });
      setSubcategory(subCtg);
      // console.log(res.data);
    };
    fetchDolls();
  }, []);
  return (
    <div>
      <Banner />
      <Gallery dolls={dolls}/>
      <Doll dolls={dolls} subcategory={subcategory} />
    </div>
  );
};

export default Home;
