import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
const DollRow = ({ doll, setDolls, dolls }) => {
  const { picture, name, price, subcategory, quantity, details, rating } = doll;

  const [loading, setLoading] = useState(false);
  const defaultValue = {
    picture: picture,
    name: name,
    price: price,
    subcategory: subcategory,
    rating: rating,
    quantity: quantity,
    details: details,
  };
  const [formData, setFormData] = useState(defaultValue);

  const handleDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Doll information!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        const res = await axios.delete(
          `https://khelagorbackend.vercel.app/api/mydolls/${id}`
        );
        console.log(res);
        setDolls(dolls.filter((dl) => dl._id !== id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setLoading(true);
    const dollData = { ...formData };

    // console.log({ id: doll._id });
    try {
      const res = await axios.put(
        `https://khelagorbackend.vercel.app/api/mydolls/${doll._id}`,
        dollData
      );
      console.log(res.data);
      setLoading(false);
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
      const updatedDoll = [
        ...dolls.filter((dl) => dl._id !== doll._id),
        res.data,
      ];
      setDolls(updatedDoll);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <tr className="hover">
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-lg shadow-xl w-16 h-16">
                {picture ? (
                  <img src={picture} alt="seller image" className="" />
                ) : null}
              </div>
            </div>
            <div>{name}</div>
          </div>
        </td>
        <td>{subcategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <label htmlFor={doll._id} className="btn btn-info">
            Update
          </label>
          {/* modal */}
          {/* The button to open modal */}

          {/* Put this part before </body> tag */}
          <input type="checkbox" id={doll._id} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl relative">
              <label
                htmlFor={doll._id}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form onSubmit={handleUpdate} className=" ">
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
                      defaultValue={picture}
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
                      defaultValue={name}
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
                      defaultValue={price}
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
                      defaultValue={subcategory}
                      onChange={handleChange}
                      name="subcategory"
                      id="subcategory"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      <option value="Cabbage Patch dolls">
                        Cabbage Patch dolls
                      </option>
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
                      defaultValue={rating}
                      placeholder="Doll Rating"
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
                      defaultValue={quantity}
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
                    defaultValue={details}
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
          </div>
        </td>
        <td>
          <button
            onClick={() => handleDelete(doll._id)}
            className="btn btn-warning"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default DollRow;
