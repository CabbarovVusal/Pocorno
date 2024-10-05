import React from "react";
import "../css/handful.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const Handful = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-handful">
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
                  Happiness by the Handful™
                  <em style={{ color: "#FED455!important" }}>.</em>
                  <u style={{ background: "#FED455" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#fff" }}
                >
                  <p>
                    Whether it’s spending time with loved ones, taking a long
                    walk in nature, or indulging in our favorite guilty
                    pleasures (hello, chocolate!), there are countless ways to
                    find happiness in our lives. And the best part? It doesn’t
                    have to be complicated or expensive. Sometimes the simplest
                    things bring us the most joy.
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

export default Handful;
