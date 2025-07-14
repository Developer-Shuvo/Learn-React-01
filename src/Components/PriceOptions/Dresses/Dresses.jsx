import Dress from "../Dress/Dress";

const Dresses = () => {
  const dressData = [
    {
      id: 1,
      image :"https://i.postimg.cc/P5SLyjP0/tshirt.jpg",
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
      image:"https://i.postimg.cc/5tLPv6Rx/polo.jpg",
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
      image:"https://i.postimg.cc/L56vrv6X/hoodie.jpg",
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
    {
  id: 4,
  image: "https://i.postimg.cc/P5SLyjP0/tshirt.jpg",
  brand: "PureWear",
  category: "Kurti",
  price: 1890,
  fabric_type: "Rayon",
  color: "Olive Green",
  size: "S",
  gender: "Female",
  stock: 30,
  rating: 4.6,
},
{
  id: 5,
  image: "https://i.postimg.cc/5tLPv6Rx/polo.jpg",
  brand: "PureWear",
  category: "Jeans",
  price: 2290,
  fabric_type: "Denim",
  color: "Dark Blue",
  size: "32",
  gender: "Male",
  stock: 17,
  rating: 4.4,
},
{
  id: 6,
  image: "https://i.postimg.cc/L56vrv6X/hoodie.jpg",
  brand: "PureWear",
  category: "Shirt",
  price: 1790,
  fabric_type: "Linen",
  color: "Sky Blue",
  size: "L",
  gender: "Male",
  stock: 27,
  rating: 4.3,
},
{
  id: 7,
  image: "https://i.postimg.cc/P5SLyjP0/tshirt.jpg",
  brand: "PureWear",
  category: "Abaya",
  price: 2890,
  fabric_type: "Georgette",
  color: "Black",
  size: "Free",
  gender: "Female",
  stock: 12,
  rating: 4.9,
},
{
  id: 8,
  image: "https://i.postimg.cc/5tLPv6Rx/polo.jpg",
  brand: "PureWear",
  category: "Joggers",
  price: 1590,
  fabric_type: "French Terry",
  color: "Grey",
  size: "M",
  gender: "Unisex",
  stock: 33,
  rating: 4.2,
},
{
  id: 9,
  image: "https://i.postimg.cc/L56vrv6X/hoodie.jpg",
  brand: "PureWear",
  category: "Blazer",
  price: 3190,
  fabric_type: "Polyester Viscose Blend",
  color: "Navy",
  size: "L",
  gender: "Male",
  stock: 10,
  rating: 4.5,
},
{
  id: 10,
  image: "https://i.postimg.cc/P5SLyjP0/tshirt.jpg",
  brand: "PureWear",
  category: "Saree",
  price: 2590,
  fabric_type: "Silk",
  color: "Red",
  size: "Free",
  gender: "Female",
  stock: 18,
  rating: 4.7,
},
{
  id: 11,
  image: "https://i.postimg.cc/5tLPv6Rx/polo.jpg",
  brand: "PureWear",
  category: "Tank Top",
  price: 990,
  fabric_type: "Cotton-Spandex",
  color: "White",
  size: "S",
  gender: "Female",
  stock: 25,
  rating: 4.1,
},
{
  id: 12,
  image: "https://i.postimg.cc/L56vrv6X/hoodie.jpg",
  brand: "PureWear",
  category: "Panjabi",
  price: 2090,
  fabric_type: "Cotton",
  color: "Beige",
  size: "XL",
  gender: "Male",
  stock: 14,
  rating: 4.6,
}

    // Add more items here
  ];

  return (
    <div className=" mt-4 ">
      
      <h1 className="text-3xl font-bold pt-20 mb-4 ml-5 w-full mx-auto">All Dresses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dressData.map((option) => (
          <Dress key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Dresses;
