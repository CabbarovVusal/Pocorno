import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../css/product.css";
import ProductOne from "./ProductOne";
import ProductItems from "./ProductItems";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../Context/CartContext";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [apiGetBestData, setApiGetData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("option1");

  const getData = async () => {
    const response = await axios.get("a.json");
    const responseBestData = await response.data.shop_by.best
      .map((item, index) => ({
        id: index + 1,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
      }))
      .splice(0, 3);
    setApiGetData(responseBestData);
  };

  useEffect(() => {
    getData();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="product-section flex justify-between flex-wrap">
      <div className="category flex justify-between items-center">
        <button className="filter-btn flex items-center justify-center">
          {" "}
          Filter
        </button>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="best-sellers"
        >
          <option value="">Newest-Oldest</option>
          <option value="">
            Best Sellers
          </option>
          <option value="">Price Low-High</option>
          <option value="">Price High-Low</option>
        </select>
      </div>
      <div className="product-item flex justify-between">
        {apiGetBestData.length > 0 ? (
          apiGetBestData.map((item, index) => (
            <motion.div key={index} className="card">
              <div className="flex items-center justify-center card-img">
                <img
                  className="w-40 h-40 img"
                  src={item.imageUrl}
                  alt="Image not found"
                />
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <h2 className="product-title" title="Best Headphone Ever">
                  {item.name}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold pack">{item.pack}</span>
                    <span className="text-xl font-bold product-price">
                      {item.price}
                    </span>
                  </div>
                  <MdAddShoppingCart
                    className="basket-icon"
                    onClick={() => {
                      addToCart(item);
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>Items not found</p>
        )}
      </div>
      <ProductOne />
      <ProductItems />
    </section>
  );
};

export default Product;
