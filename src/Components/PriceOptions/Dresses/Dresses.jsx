import Dress from "../Dress/Dress";

const Dresses = () => {
  const dressData = [
    {
      id: 1,
      brand: "PureWear",
      category: "T-Shirt",
      price: 1290,
      fabric_type: "100% Cotton",
      color: "Black",
      size: "M",
      gender: "Unisex",
      stock: 45,
      rating: 4.7,
    },
    {
      id: 2,
      brand: "PureWear",
      category: "Polo Shirt",
      price: 1690,
      fabric_type: "Piqué Cotton",
      color: "Navy Blue",
      size: "L",
      gender: "Male",
      stock: 38,
      rating: 4.5,
    },
    {
      id: 3,
      brand: "PureWear",
      category: "Hoodie",
      price: 2590,
      fabric_type: "Fleece Cotton Blend",
      color: "Maroon",
      size: "XL",
      gender: "Unisex",
      stock: 22,
      rating: 4.8,
    },
    // Add more items here
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 ">All Dresses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dressData.map((option) => (
          <Dress key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Dresses;
