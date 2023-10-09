import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import car from "../assets/images/car.svg";
import car_two from "../assets/images/car2.svg";
import car_three from "../assets/images/car3.svg";
import GasStation from "../assets/images/gas-station.svg";
import Manual from "../assets/images/manual.svg";
import user from "../assets/images/users.png";

const popularCarsData = [
    {
      id: 1,
      name: "Koenigsegg",
      imageSrc: car,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 People",
      icon: GasStation,
      icons_two: Manual,
      icons_three: user,
      price: "$99.00/",
      carCatogary: "sports",
    },
    {
      id: 2,
      name: "Nissan GT - R",
      imageSrc: car_two,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 3,
      name: "Rolls - Royce",
      imageSrc: car_three,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 4,
      name: "CR  - V",
      imageSrc: car,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 5,
      name: "Koenigsegg",
      imageSrc: car,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 People",
      icon: GasStation,
      icons_two: Manual,
      icons_three: user,
      price: "$99.00/",
      carCatogary: "sports",
    },
    {
      id: 6,
      name: "Nissan GT - R",
      imageSrc: car_two,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 7,
      name: "Rolls - Royce",
      imageSrc: car_three,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 8,
      name: "CR  - V",
      imageSrc: car,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 9,
      name: "CR  - V",
      imageSrc: car,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 10,
      name: "Koenigsegg",
      imageSrc: car,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 People",
      icon: GasStation,
      icons_two: Manual,
      icons_three: user,
      price: "$99.00/",
      carCatogary: "sports",
    },
    {
      id: 11,
      name: "Nissan GT - R",
      imageSrc: car_two,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    {
      id: 12,
      name: "Rolls - Royce",
      imageSrc: car_three,
      gasTankCapacity: "90L",
      carType: "Manual",
      carUsage: "2 Pepople",
      icon: GasStation,
      icons_two:Manual,
      icons_three:user,
      price:'$99.00/day'
    },
    
  ];


const PopularCar = () => {
  const [likedCars, setLikedCars] = useState([]);
  const [showAllCars, setShowAllCars] = useState(false); // Initialize to true

  const toggleLike = (id) => {
    if (likedCars.includes(id)) {
      setLikedCars(likedCars.filter((carId) => carId !== id));
    } else {
      setLikedCars([...likedCars, id]);
    }
  };

  const filteredCars = showAllCars ? popularCarsData : popularCarsData.slice(0, 4);

  return (
    <div className="bg-[#F6F7F9]">
      <div className="container">
        <div className="">
          <div className="flex justify-between px-3 mb-3">
            <h1 className="text-[#90A3BF] text-base font-semibold">Popular Cars</h1>
            <h2
              className="text-primary text-base font-semibold cursor-pointer"
              onClick={() => setShowAllCars(!showAllCars)}
            >
              View All
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="flex flex-col p-4 gap-10 rounded-[10px] bg-[#FFF]"
              >
                <div className="flex justify-between px-2 py-2">
                  <div>
                    <h2 className="text-[#1A202C] text-xl font-bold -tracking-[0.6px]">
                      {car.name}
                    </h2>
                    <span className="text-[#90A3BF] text-sm font-bold">
                      {car.carCatogary}
                    </span>
                  </div>
                  {likedCars.includes(car.id) ? (
                    <AiFillHeart
                      onClick={() => toggleLike(car.id)}
                      className="text-red-500 text-xl cursor-pointer"
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={() => toggleLike(car.id)}
                      className="text-[#90A3BF] text-xl cursor-pointer"
                    />
                  )}
                </div>
                <div className="flex m-auto">
                  <img src={car.imageSrc} alt={car.name} />
                </div>
                <div className="flex gap-5">
                  <div className="flex items-center">
                    <img src={car.icon} alt="" />
                    <span className="text-[#90A3BF] text-sm font-bold">
                      {car.gasTankCapacity}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src={car.icons_two} alt="" />
                    <span className="text-[#90A3BF] text-sm font-bold">
                      {car.carType}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src={car.icons_three} alt="" />
                    <span className="text-[#90A3BF] text-sm font-bold">
                      {car.carUsage}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1A202C] text-xl font-bold">
                    {car.price}
                    <span className="text-[#90A3BF] text-sm font-bold">day</span>
                  </span>
                  <button className="bg-primary text-[#FFF] text-base font-semibold rounded-[4px] py-2 px-5">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCar;
