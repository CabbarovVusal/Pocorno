import React from "react";
import "../css/earthday.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const EarthDay = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-earth">
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
                  Earth Day
                  <em style={{ color: "#412015" }}>.</em>
                  <u style={{ background: "#412015" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#FFFFFF!important" }}
                  bis_skin_checked="1"
                >
                  <p>
                     At Popcornopolis, we
                    choose to celebrate Earth Day, every day. That’s why we’re
                    excited to offer our customers some fun and creative ways to
                    reuse our packaging. Who knew our cone packaging could be
                    turned into hanging window planters? Not to mention, it’s a
                    great way to flex those crafting skills and impress your
                    friends with your upcycling prowess.
                  </p>
                  <p>&nbsp;</p>
                  <p>April 22, 2024</p>
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

export default EarthDay;
