import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Products/productitems.css";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../Context/CartContext";

const ProductItems = () => {
  const [apiGetData, setApiGetData] = useState([]);
  const { addToCart } = useContext(CartContext); // useContext burada çağırılır

  const getData = async () => {
    const response = await axios.get("a.json");
    const responseBestData = response.data.shop_by.best
      .map((item, index) => ({
        id: index + 1,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        pack: item.pack || "N/A", // `pack` dəyəri yoxdursa "N/A" qoyur
      }))
      .splice(4, 14);
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
    <div className="product-items flex justify-between flex-wrap">
      {apiGetData.length > 0 ? (
        apiGetData.map((item) => (
          <motion.div
            key={item.id} // `item.id` burada istifadə olunur
            className="card card_item"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
  );
};

export default ProductItems;
