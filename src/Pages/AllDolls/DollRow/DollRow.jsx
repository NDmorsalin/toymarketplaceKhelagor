const DollRow = ({ doll }) => {
  const {
    picture,
    name,
    price,
    subcategory,
    seller,
    quantity,
  } = doll;
  return (
    <tr className="hover">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              {seller.sellerImg ? (
                <img src={seller.sellerImg} alt="seller image" className="" />
              ) : null}
            </div>
          </div>
          <div>
            <div className="font-bold">
              {seller?.sellerName ? seller?.sellerName : null}
            </div>
          </div>
        </div>
      </td>
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
        <button className="btn btn-info">View</button>
      </td>
    </tr>
  );
};

export default DollRow;
