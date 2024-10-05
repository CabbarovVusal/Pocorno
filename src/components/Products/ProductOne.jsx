import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Products/productone.css";
import { CartContext } from "../Context/CartContext";
import { MdAddShoppingCart } from "react-icons/md";

const ProductOne = () => {
  const { addToCart } = useContext(CartContext);
  const [apiGetBestData, setApiGetData] = useState([]);

  const getData = async () => {
    const response = await axios.get("a.json");
    const newResponseData = response.data.shop_by.best
      .map((item, index) => ({
        id: index + 1,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
      }))
      .slice(0, 1);
    setApiGetData(newResponseData);
  };

  useEffect(() => {
    getData();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <div className="card-item flex">
        {apiGetBestData ? (
          apiGetBestData.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="card_item card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                      <span className="text-xl font-bold pack">
                        {item.pack}
                      </span>
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
            );
          })
        ) : (
          <p>Items not found</p>
        )}

        <motion.div
          className="product-one__card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="product-one__inner flex">
            <div className="product-one__left">
              <h2 className="h1 with-deco">
                Create your own <span>.</span>
              </h2>
              <p className="product-one__left-paragraph">
                Mix & match flavors and create a hand-picked bundle that's just
                right for you!
              </p>
              <div className="navigation-btn flex justify-center">
                <a href="/create-your-own" className="relative navigation">
                  Let's Go
                </a>
              </div>
            </div>
            <div className="product-one__right relative">
              <img
                src="https://www.popcornopolis.com/wp-content/uploads/2021/08/cyo-card-large-image-1.png"
                alt="product"
                className="product-one__image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductOne;
