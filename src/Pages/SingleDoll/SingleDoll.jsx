import { useLoaderData } from "react-router-dom";

const SingleDoll = () => {
  const singleDoll = useLoaderData();
  console.log(singleDoll);
  return <div>
    <h1>{singleDoll.name}</h1>
  </div>;
};

export default SingleDoll;
