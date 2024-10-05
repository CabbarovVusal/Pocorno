import React from "react";
import "../css/latenight.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const LateNightSnacking = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200], [100, 0]);
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  return (
    <section className="section-snacking">
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
                  style={{ color: "#412015 !important" }}
                  className="h1 h1-extra-small with-deco"
                >
                  Late Night Snacking
                  <em style={{ color: "#7F441D!important" }}>.</em>
                  <u style={{ background: "#7F441D" }}></u>
                </h2>
                <div
                  className="paragraph paragraph-s"
                  style={{ color: "#412015" }}
                >
                  <p>
                    Sneaking a snack late at night can be both thrilling and
                    satisfying, like a delicious little secret between you and
                    your taste buds. And let’s be honest, sometimes there’s just
                    no better time to indulge in a snack than in the middle of
                    the night when you’re feeling a little peckish. So go ahead,
                    sneak that snack, savor every bite, and enjoy the delicious
                    thrill of breaking the rules just a little bit.
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

export default LateNightSnacking;
