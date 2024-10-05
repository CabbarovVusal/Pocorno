import React from "react";
import "../css/easter.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Easter = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-easter">
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
                  style={{ color: "#FFFFFF!important" }}
                  className="h1 h1-extra-small with-deco"
                >
                  Easter
                  <em style={{ color: "#7F441D!important" }}>.</em>
                  <u style={{ background: "#7F441D" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#FFFFFF!important" }}
                  bis_skin_checked="1"
                >
                  <p>
                    Celebrate the joy and wonder of Easter with our delightful
                    collection of treats and treasures. Whether you’re searching
                    for the perfect gift, planning an egg hunt, or simply
                    looking to add a touch of whimsy to your basket, we’ve got
                    everything you need to make this Easter extra special.
                  </p>
                  <p>&nbsp;</p>
                  <p>March 30, 2024</p>
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

export default Easter;
