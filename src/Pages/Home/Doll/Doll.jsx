import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../Share/SectionTitle/SectionTitle";
import DollCard from "../DollCard/DollCard";
import Loading from "../../../Share/Loading/Loading";

const Doll = ({ dolls, subcategory, loading }) => {
  console.log(subcategory);
  return (
    <div className="container px-8 mx-auto ">
      <SectionTitle
        subtitle="You can sort all dolls by there Subcategory"
        title="Shop by category"
      />
      {loading ? (
        <Loading />
      ) : (
        <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
          <TabList>
            {subcategory.map((sub) => (
              <Tab key={sub}>{sub}</Tab>
            ))}
          </TabList>

          {subcategory.map((sub, ind) => {
            return (
              <TabPanel key={sub + ind}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dolls
                    .filter((doll) => doll.subcategory === sub)
                    .map((doll) => (
                      <DollCard key={doll._id} doll={doll} />
                    ))}
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      )}
    </div>
  );
};

export default Doll;
