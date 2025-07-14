import PropTypes from "prop-types";

const Dress = ({ option }) => {
  const {
    image,
    brand,
    category,
    price,
    fabric_type,
    color,
    size,
    gender,
    stock,
    rating,
  } = option;

  return (
    <div className="w-full mx-auto">
      <div className="max-w-[1320px] mx-auto flex justify-center">
        {/* daisy card */}
        <div className="card bg-base-200 w-96 shadow-xl mt-6">
          <figure className="h-44">
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {category}
              <div className="badge badge-secondary">NEW</div>
            </h2>

            {/* Details */}
            <div className="space-y-1">
              <div className="flex text-end">
                <h2>Brand :</h2>
                <p>{brand}</p>
              </div>
              <div className="flex text-end">
                <h2>Price :</h2>
                <p>{price} ৳</p>
              </div>
              <div className="flex text-end">
                <h2>Fabric :</h2>
                <p>{fabric_type}</p>
              </div>
              <div className="flex text-end">
                <h2>Color :</h2>
                <p>{color}</p>
              </div>
              <div className="flex text-end">
                <h2>Size :</h2>
                <p>{size}</p>
              </div>
              <div className="flex text-end">
                <h2>Gender :</h2>
                <p>{gender}</p>
              </div>
              <div className="flex text-end">
                <h2>Stock :</h2>
                <p>{stock}</p>
              </div>
              <div className="flex text-end">
                <h2>Rating :</h2>
                <p>{rating}</p>
              </div>
            </div>

            <div className="card-actions justify-end mt-3">
              <button className="badge badge-outline hover:border-lime-600">
                Fashion
              </button>
              <button className="badge badge-outline hover:border-lime-600">
                Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dress.propTypes = {
  option: PropTypes.object.isRequired,
};

export default Dress;
