import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Doll = () => {
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

  console.log(subcategory);
  return (
    <div className="container px-8 mx-auto ">
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList>
          {subcategory.map((sub) => (
            <Tab key={sub}>{sub}</Tab>
          ))}
        </TabList>

        {subcategory.map((sub, ind) => {
          return (
            <TabPanel key={sub + ind}>
              {dolls
                .filter((doll) => doll.subcategory === sub)
                .map((doll, index) => (
                  <p key={doll._id}>
                    {doll.details} {index}
                  </p>
                ))}
            </TabPanel>
          );
        })}
      </Tabs>
      dolls
    </div>
  );
};

export default Doll;
