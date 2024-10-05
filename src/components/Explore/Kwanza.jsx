import React from "react";
import "../css/kwanza.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Kwanza = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-kwanza">
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
                  Kwanzaa
                  <em style={{ color: "#FED455" }}>.</em>
                  <u style={{ background: "#FED455" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#FFFFFF!important" }}
                  bis_skin_checked="1"
                >
                  <p>
                    Embrace the spirit of unity and heritage during Kwanzaa with
                    a shared bowl of popcorn. The satisfying crunch of popcorn
                    embodies the principles of this celebration – Umoja (Unity),
                    Kujichagulia (Self-Determination), and Ujima (Collective
                    Work and Responsibility). Gather, enjoy, and create
                    meaningful memories with every pop.
                  </p>
                  <p>&nbsp;</p>
                  <p>December 26, 2024 – January 1, 2025</p>
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

export default Kwanza;
