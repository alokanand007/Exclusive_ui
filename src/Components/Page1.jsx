import React from "react";
import framepic from "../Assets/Frame 560.png";
import framepic2 from "../Assets/Frame 600.png";
import { useState } from "react";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { List, ListItem, ListItemText } from "@mui/material";
import {
  FavoriteBorder,
  Visibility,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Card from "@mui/joy/Card";

function Page1() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 200,
      discount: "-40%",
      rating: 4,
      reviews: 88,
      image:
        "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "https://m.media-amazon.com/images/I/61-kTKQuDUL._SL1500_.jpg",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: "https://m.media-amazon.com/images/I/71s8OHQKciL._SL1500_.jpg",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: "-25%",
      rating: 5,
      reviews: 99,
      image:
        "https://m.media-amazon.com/images/I/41Wny89y5rL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 5,
      name: "Wireless Mouse",
      price: 40,
      originalPrice: 80,
      discount: "-50%",
      rating: 4,
      reviews: 112,
      image:
        "https://m.media-amazon.com/images/I/31OAW0NYpkL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 40,
      originalPrice: 80,
      discount: "-50%",
      rating: 4,
      reviews: 112,
      image: "https://i.ibb.co/4W2DGKm/mouse.png",
    },
    {
      id: 7,
      name: "Gaming Headset",
      price: 210,
      originalPrice: 300,
      discount: "-30%",
      rating: 4,
      reviews: 67,
      image:
        "https://m.media-amazon.com/images/I/41Cr9KJY64L._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 8,
      name: "RGB Desk Lamp",
      price: 60,
      originalPrice: 100,
      discount: "-40%",
      rating: 5,
      reviews: 40,
      image:
        "https://m.media-amazon.com/images/I/414I4xgphzL._SY445_SX342_QL70_FMwebp_.jpg",
    },
  ];
  const products4Component = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 200,
      discount: "-40%",
      rating: 4,
      reviews: 88,
      image:
        "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "https://m.media-amazon.com/images/I/61-kTKQuDUL._SL1500_.jpg",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: "https://m.media-amazon.com/images/I/71s8OHQKciL._SL1500_.jpg",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      discount: "-25%",
      rating: 5,
      reviews: 99,
      image:
        "https://m.media-amazon.com/images/I/41Wny89y5rL._SX300_SY300_QL70_FMwebp_.jpg",
    },
  ];

  //
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, products.length - visibleCount));
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);
  return (
    <>
      {/* component 1 */}
      <div className="grid grid-cols-8 ">
        {/* Left column */}
        <div className="col-span-2 flex pt-12 justify-center">
          <List size="sm">
            <ListItem>
              <div className="flex items-center justify-between w-full">
                <ListItemText primary="Women's Fashion" />
                <KeyboardArrowRight />
              </div>
            </ListItem>
            <ListItem>
              <div className="flex items-center justify-between w-full">
                <ListItemText primary="Men's Fashion" />
                <KeyboardArrowRight />
              </div>
            </ListItem>
            <ListItem>
              <ListItemText primary="Home & Kitchen" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Medicine" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sports and Outdoor" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Baby Products" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Health & Beauty" />
            </ListItem>
          </List>
        </div>

        {/* Right content */}
        <div className="col-span-6 border-l pt-12 border-gray-300 pl-4 flex justify-center shadow-sm">
          <img src={framepic} alt="a" />
        </div>
      </div>
      {/* component 2 */}
      <div className="p-3 mt-14">
        {/* Header */}
        <div className="text-red-500 font-medium">Today's</div>
        <div className="flex justify-between items-center">
          <div className="flex gap-24">
            <h2 className="text-3xl pt-1 font-bold">Flash Sales</h2>

            <div className="flex gap-4 text-center">
              {[
                { label: "Days", time: "03" },
                { label: "Hours", time: "23" },
                { label: "Minutes", time: "19" },
                { label: "Seconds", time: "56" },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="text-lg font-bold text-red-500">{item.time}</p>
                  <p className="text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <div className="flex justify-end items-center mt-4 mb-2 gap-2">
            <IconButton
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="disabled:opacity-50"
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={startIndex >= products.length - visibleCount}
              className="disabled:opacity-50"
            >
              <ArrowForwardIos />
            </IconButton>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-300">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="relative border p-3 rounded-md shadow hover:shadow-md transition duration-200"
            >
              <div className="absolute top-2 left-2 bg-red-500 text-white z-10 text-xs px-2 py-1 rounded">
                {product.discount}
              </div>
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <IconButton size="small">
                  <FavoriteBorder fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <Visibility fontSize="small" />
                </IconButton>
              </div>
              <div className="relative bg-gray-200 p-3 rounded-md">
                <img
                  src={product.image}
                  className="w-full h-32 object-contain mix-blend-multiply"
                  alt="ff"
                />
              </div>
              <h3 className="text-sm font-medium">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-red-500 font-semibold">${product.price}</p>
                <p className="line-through text-sm text-gray-400">
                  ${product.originalPrice}
                </p>
              </div>
              <div className="text-yellow-500 text-sm">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <p className="text-xs text-gray-500">({product.reviews})</p>
              {product.name.includes("Keyboard") && (
                <Button
                  variant="contained"
                  fullWidth
                  size="small"
                  className="mt-2 bg-black hover:bg-gray-800"
                >
                  Add To Cart
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20 mb-10">
          <button className="bg-red-600 text-white w-1/6 rounded-sm text-sm p-3">
            View All Products
          </button>
        </div>
        <div className="flex justify-center">
          <hr className=" w-4/5 border-t-2 border-gray-300" />
        </div>
      </div>

      {/* component 3 */}
      <div className="flex mt-12 justify-center">
        <div className="w-4/5">
          <p className="text-red-500 font-medium">Categries</p>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold mt-4 ">Browse By Category</h2>
            <div className="flex justify-end items-end  gap-2">
              <IconButton
                // onClick={handlePrev}
                // disabled={startIndex === 0}
                className="disabled:opacity-50"
              >
                <ArrowBackIos />
              </IconButton>
              <IconButton
                // onClick={handleNext}
                // disabled={startIndex >= products.length - visibleCount}
                className="disabled:opacity-50"
              >
                <ArrowForwardIos />
              </IconButton>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-10">
            <Card size="lg" className="h-32 flex justify-center items-center">
              Small card
            </Card>
            <Card size="lg" className="h-32 flex justify-center items-center">
              Small card
            </Card>
            <Card size="lg" className="h-32 flex justify-center items-center">
              Small card
            </Card>
            <Card size="lg" className="h-32 flex justify-center items-center">
              Small card
            </Card>
            <Card size="lg" className="h-32 flex justify-center items-center">
              Small card
            </Card>
            <Card size="lg" className="h-32 flex justify-center items-center">
              Small card
            </Card>
          </div>
        </div>
      </div>
      {/* component 4 */}
      <div className="flex mt-16 justify-center">
        <div className="p-3 w-4/5 ">
          {/* Header */}
          <div className="">
            <div className="text-red-500 font-medium">Today's</div>
            <div className="flex justify-between mt-4">
              <h2 className="text-3xl font-bold">Flash Sales</h2>
              <button className="bg-red-600 text-white w-1/6 rounded-sm text-sm p-3">
                View All Products
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-300">
            {products4Component.map((product) => (
              <div
                key={product.id}
                className="relative border p-3 rounded-md shadow hover:shadow-md transition duration-200"
              >
                <div className="absolute top-2 left-2 bg-red-500 text-white z-10 text-xs px-2 py-1 rounded">
                  {product.discount}
                </div>
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <IconButton size="small">
                    <FavoriteBorder fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <Visibility fontSize="small" />
                  </IconButton>
                </div>
                <div className="relative bg-gray-200 p-3 rounded-md">
                  <img
                    src={product.image}
                    className="w-full h-32 object-contain mix-blend-multiply"
                    alt={product.name}
                  />
                </div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-red-500 font-semibold">${product.price}</p>
                  <p className="line-through text-sm text-gray-400">
                    ${product.originalPrice}
                  </p>
                </div>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <p className="text-xs text-gray-500">({product.reviews})</p>
                {product.name.includes("Keyboard") && (
                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    className="mt-2 bg-black hover:bg-gray-800"
                  >
                    Add To Cart
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* img */}
      <div className="flex justify-center mt-24">
        <img className="w-4/5" src={framepic2} alt="Frame" />
      </div>
    </>
  );
}

export default Page1;
