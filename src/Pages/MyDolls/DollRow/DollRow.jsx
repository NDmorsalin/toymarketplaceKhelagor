import axios from "axios";
import swal from "sweetalert";
const DollRow = ({ doll, setDolls, dolls }) => {
  const { picture, name, price, subcategory, quantity } = doll;
  const handleUpdate = async (url) => {};
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
          `http://localhost:5000/api/mydolls/${id}`
        );
        console.log(res);
        setDolls(dolls.filter((dl) => dl._id !== id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
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
          
        </td>
        <td>
          <button
            onClick={() => handleDelete(doll._id)}
            className="btn btn-warning"
          >
            Delete{" "}
          </button>
        </td>
      </tr>

      
    </>
  );
};

export default DollRow;
