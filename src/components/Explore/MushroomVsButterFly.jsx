import React from "react";
import "../css/section-1.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const MushroomVsButterFly = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-1">
      <div className="flex-image-text shop-now cleared shop-now-right-style ">
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
                  Mushroom vs Butterfly
                  <em style={{ color: "#FED455!important" }}>.</em>
                  <u style={{ background: "#FED455" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#fff" }}
                >
                  <p>
                    Within each variety of popcorn, there’s an extremely wide
                    range of quality, flavor, color and size. There are white
                    butterfly strains and yellow ones—and some pop better than
                    others. Believe it or not, no two strains look, taste, and
                    crunch exactly the same when popped.
                  </p>
                </div>
                <motion.a
                  href="#"
                  className="btn wow secondary yellow-btn animated"
                  style={{ visibility: "visible", opacity, x }} 
                >
                  <span>Learn More</span>
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

export default MushroomVsButterFly;
