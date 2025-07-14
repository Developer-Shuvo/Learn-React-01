import PropTypes from "prop-types";

const Dress = ({ option }) => {
  const {  brand, category, price, fabric_type, color, size, gender, stock, rating } = option;

  return (
    <div className="border p-4 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold text-center">{category}</h2>

<div className="px-6 rounded border border-gray-700 p-2">
<div className="flex justify-between items-center">
      <h2>Brand :</h2> 
      <p>{brand}</p>
      </div>
      <div className="flex justify-between items-center">
      <h2>Price : </h2> 
      <p>{price} ৳</p>
      </div>
      <div className="flex bg-gray-800 justify-between items-center">
      <h2>Fabric :</h2> 
      <p>{fabric_type}</p>
      </div>
      <div className="flex justify-between items-center">
      <h2>Color :</h2> 
      <p>{color}</p>
      </div>
      <div className="flex justify-between items-center">
      <h2>Size :</h2> 
      <p>{size}</p>
      </div>
      <div className="flex justify-between items-center">
      <h2>Gender :</h2> 
      <p>{gender}</p>
      </div>
      <div className="flex justify-between items-center">
      <h2>Stock :</h2> 
      <p>{stock}</p>
      </div>
      <div className="flex justify-between items-center">
      <h2>Rating :</h2> 
      <p>{rating}</p>
      </div>
</div>
      
      

    </div>
  );
};

Dress.propTypes = {
  option: PropTypes.object.isRequired,
};

export default Dress;
