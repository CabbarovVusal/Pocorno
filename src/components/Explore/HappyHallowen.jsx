import React from "react";
import "../css/happyhallowen.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const HappyHallowen = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-happyhallowen">
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
                  Happy Halloween
                  <em style={{ color: "#412015" }}>.</em>
                  <u style={{ background: "#412015" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#FFFFFF!important" }}
                  bis_skin_checked="1"
                >
                  <p>
                    Popcorn is the ultimate Halloween treat. Its versatility
                    allows you to craft both sweet and savory flavors to suit
                    every ghoul and goblin’s taste. Plus, it’s a healthier
                    alternative to candy, making it a guilt-free option. So, pop
                    up some spooky fun and enjoy the crunchiest delight this
                    Halloween season.
                  </p>
                  <p>&nbsp;</p>
                  <p>October 31, 2024</p>
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

export default HappyHallowen;
