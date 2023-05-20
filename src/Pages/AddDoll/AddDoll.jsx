import swal from 'sweetalert';
import { useState } from "react";
import { useAuth } from "../../Provider/AuthProvider";
import { distractObject } from "../../utility/distractObject";
import axios from "axios";

const AddDoll = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const defaultValue = {
    picture: "",
    name: "",
    price: "",
    subcategory: "",
    rating: "",
    sellerName: user?.displayName,
    sellerEmail: user?.email,
    sellerImg: user?.photoURL,
    quantity: "",
    details: "",
  };
  const [formData, setFormData] = useState(defaultValue);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setLoading(true);
    const dollData = {
      ...distractObject(
        formData,
        "sellerName", //property name what you want to skip
        "sellerEmail", //property name what you want to skip
        "sellerImg" //property name what you want to skip
      ),
      seller: {
        sellerName: formData.sellerName,
        sellerEmail: formData.sellerEmail,
        sellerImg: formData.sellerImg,
      },
    };

    // console.log(dollData);
    try {
      const res = await axios.post("http://localhost:5000/api/mydolls", dollData);
      if(res.data.acknowledged){
        swal({
          title: 'Added a new doll',
          text: "Click ok button and you can add new one!",
          icon: "success",
        }); 
        setFormData(defaultValue);
      } 
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center my-4 ">Add Doll</h2>
      <form onSubmit={handleSubmit} className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <label
              htmlFor="picture"
              className="block text-gray-700 font-bold mb-2"
            >
              Picture
            </label>
            <input
              type="text"
              id="picture"
              name="picture"
              value={formData?.picture}
              placeholder="https://example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name}
              placeholder="Doll Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData?.price}
              placeholder="Doll Price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subcategory"
              className="block text-gray-700 font-bold mb-2"
            >
              Subcategory
            </label>
            <select
              defaultValue={formData.subcategory}
              onChange={handleChange}
              name="subcategory"
              id="subcategory"
            >
              <option disabled value="">
                Select one
              </option>
              <option value="Action figures">Action figures</option>
              <option value="Fashion dolls">Fashion dolls</option>
              <option value="Stuffed animals">Stuffed animals</option>

              <option value="Baby dolls">Baby dolls</option>
              <option value="Barbie dolls">Barbie dolls</option>
              <option value="Bisque dolls">Bisque dolls</option>
              <option value="Blythe dolls">Blythe dolls</option>
              <option value="Bobbleheads">Bobbleheads</option>
              <option value="Bratz dolls">Bratz dolls</option>
              <option value="Cabbage Patch dolls">Cabbage Patch dolls</option>
              <option value="Candy dolls">Candy dolls</option>
              <option value="Cloth dolls">Cloth dolls</option>
              <option value="Dollhouses">Dollhouses</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={formData?.rating}
              placeholder="Doll Rating"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              placeholder="Seller Name"
              value={user?.displayName}
              disabled={user?.displayName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              value={user?.email}
              disabled={user?.email}
              placeholder="Seller Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerImg"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Image
            </label>
            <input
              type="text"
              id="sellerImg"
              name="sellerImg"
              value={user?.photoURL}
              disabled={user?.photoURL}
              placeholder="https://example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData?.quantity}
              placeholder="Doll Quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="details"
            className="block text-gray-700 font-bold mb-2"
          >
            Details
          </label>
          <textarea
            id="details"
            name="details"
            rows="4"
            cols={"50"}
            value={formData?.details}
            placeholder="Doll Details"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                Loading...
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoll;
