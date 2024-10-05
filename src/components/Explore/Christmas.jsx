import React from "react";
import "../css/christmas.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Christmas = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-christmas">
      <div className="flex-image-text shop-now cleared shop-now-right-style">
        <div className="inner inner_slim">
          <div className="shop-now__inner relative flex lg:flex-row sm:flex-col cleared">
            <div className="shop-now__right">
              <div className="photo shape">
                <div className="shop-now__right-deco hide-mobile">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="shop-now__left">
              <div className="shop-now__left__inner shop-now__left__inner-light">
                <h2
                  style={{ color: "#FFFFFF" }}
                  className="h1 h1-extra-small with-deco"
                >
                  Christmas
                  <em style={{ color: "#FED455" }}>.</em>
                  <u style={{ background: "#FED455" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#FFFFFF!important" }}
                  bis_skin_checked="1"
                >
                  <p>
                    Share Christmas cheer with popcorn. Whether snuggled by the
                    fireplace, enjoying festive movies, or stringing it on a
                    tree, let each pop bring joy. Popcorn is the perfect holiday
                    treat for sharing laughter and creating cherished moments.
                    Elevate your celebration with this crunchy delight.
                  </p>
                  <p>&nbsp;</p>
                  <p>December 25, 2024</p>
                </div>
                <motion.a
                  href="#"
                  className="btn wow secondary yellow-btn animated"
                  style={{ visibility: "visible", opacity, x }}
                >
                  <span>Shop Now</span>
                  <FaArrowRightLong className="arrow-right" />
                </motion.a>
              </div>
            </div>
            <div className="shop-now__right-deco show-mobile">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Christmas;
