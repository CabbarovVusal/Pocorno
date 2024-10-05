import React from "react";
import "../css/hanukkah.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Hanukkah = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-hanukkah">
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
                  style={{ color: "#412015" }}
                  className="h1 h1-extra-small with-deco"
                >
                  Hanukkah
                  <em style={{ color: "#412015" }}>.</em>
                  <u style={{ background: "#412015" }}></u>
                </h2>
                <div className="paragraph paragraph-s" bis_skin_checked="1">
                  <p>
                    Elevate your celebration with the crispy goodness of
                    popcorn—each kernel a burst of happiness. Whether sweet or
                    savory, let popcorn add a playful crunch to your Festival of
                    Lights. Gather, share, and enjoy the festive spirit one
                    delicious pop at a time.
                  </p>
                  <p>&nbsp;</p>
                  <p>December 25, 2024 – January 2, 2025</p>
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

export default Hanukkah;
