import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/product.css";
import ShopProductOne from "../ShoppingGift/ShopProductOne";
import ShopProductItems from "../ShoppingGift/ShopProductItems";
import "../css/popcormgift.css";
import { CartContext } from "../Context/CartContext";
import { MdAddShoppingCart } from "react-icons/md";

const PopcornGifts = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = React.useState("option1");
  const [apiGetBestData, setApiGetData] = useState([]);

  const getData = async () => {
    const response = await axios.get("../../../a.json");
    const responseBestData = await response.data.shop_by.gifts
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

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="product-section flex justify-between flex-wrap">
      <div className="tax-hero tax-hero-popcorn-gift">
        <div className="inner inner_slim popcorn-gift">
          <div
            className="tax-hero__inner sponsor cleared relative"
            style={{ background: "#E22733" }}
          >
            <div className="tax-hero__inner-left tax-hero__inner-left-header">
              <span className="subhead" style={{ color: "#FFFFFF" }}>
                Presents popped daily
              </span>
              <div className="hero-front__inner--red">
                <h1 className="h1" style={{ color: "#FFFFFF" }}>
                  Delightful Popcorn <br />
                  <span style={{ color: "#ffdc8b" }} className="h1-span">
                    Gifts
                  </span>
                  <b className="dot">.</b>
                </h1>
              </div>
            </div>
            <div className="tax-hero__inner-right-image"></div>
          </div>
        </div>
      </div>
      <div className="category flex justify-between items-center">
        <button className="filter-btn flex items-center justify-center">
          Filter
        </button>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="best-sellers"
        >
          <option value="">Best Sellers</option>
          <option value="">Newest-Oldest</option>
          <option value="">Price Low-High</option>
          <option value="">Price High-Low</option>
        </select>
      </div>
      <hr />
      <div className="product-item flex justify-between">
        {apiGetBestData.length > 0 ? (
          apiGetBestData.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center card-img">
                <img
                  className="w-40 h-40 img"
                  src={item.imageUrl}
                  alt="Image not found"
                />
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <h2 className="product-title" title={item.name}>
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
      <ShopProductOne />
      <ShopProductItems />
    </section>
  );
};

export default PopcornGifts;
