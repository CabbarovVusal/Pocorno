import React, { useState } from "react";
import "../css/createyourown.css";

const CreateYourOwn = () => {
  const [imgURL, setImgURL] = useState(
    "https://www.popcornopolis.com/wp-content/uploads/2021/09/Popcorn-Flavors.png"
  );
  const [width, setWidth] = useState(250);
  const handleMouseEnterPopcorn = () => {
    setImgURL(
      "https://www.popcornopolis.com/wp-content/uploads/Mini_Cone_Case_Generic_Left_Image_250x250-2.png"
    );
    setWidth(300);
  };
  const handleMouseLeave = () => {
    setImgURL(
      "https://www.popcornopolis.com/wp-content/uploads/2021/09/Popcorn-Flavors.png"
    );
    setWidth(250);
  };
  const handleMouseEnterCake = () => {
    setImgURL(
      "https://www.popcornopolis.com/wp-content/uploads/Big5_PDP_PK1_Kernels_01.png"
    );
    setWidth(300);
  };

  return (
    <main className="main">
      <div className="create-step">
        <div className="inner inner_slim">
          <div className="create-own container">
            <div className="create-own-1">
              <div className="box" bis_skin_checked="1">
                <div className="h4" bis_skin_checked="1">
                  3 Simple Steps
                </div>
                <h1 className="h1 h1-small with-deco">
                  <span style={{ color: "#c80910" }}>Create</span> your own
                  assortment<strong className="em">.</strong>
                </h1>
                <div className="paragraph paragraph-s" bis_skin_checked="1">
                  <p>
                    Whether your personality is salty, sweet, or somewhere in
                    between, you’ve got plenty of flavors to explore. Signature
                    cones in two sizes, plus a new pouch option for lasting
                    freshness…
                  </p>
                </div>
                <div className="box-image" bis_skin_checked="1">
                  <div className="mobile-image" bis_skin_checked="1">
                    <img
                      data-origin="https://www.popcornopolis.com/wp-content/uploads/2021/09/Popcorn-Flavors.png"
                      src={imgURL}
                      width={width}
                      alt="Image not found"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="create-own-2">
              <ul className="progressbar flex justify-between">
                <li className="active progress-list" aria-current="step">
                  <div
                    className="circle flex flex-col items-center"
                    bis_skin_checked="1"
                  >
                    <div className="circle-num" bis_skin_checked="1">
                      1
                    </div>
                    <span className="circle-txt">Select Size </span>
                  </div>
                </li>
                <li className="progress-list">
                  <div
                    className="circle  flex flex-col items-center"
                    bis_skin_checked="1"
                  >
                    <div className="circle-num" bis_skin_checked="1">
                      2
                    </div>
                    <span className="circle-txt">Quantity </span>
                  </div>
                </li>
                <li className="progress-list">
                  <div
                    className="circle flex flex-col items-center"
                    bis_skin_checked="1"
                  >
                    <div className="circle-num" bis_skin_checked="1">
                      3
                    </div>
                    <span className="circle-txt">Flavors</span>
                  </div>
                </li>
              </ul>
              <div className="products flex">
                <div className="select-size flex flex-row" bis_skin_checked="1">
                  <ul className="flex flex-row mt-30 justify-between">
                    <li
                      className="product-size"
                      data-image="https://www.popcornopolis.com/wp-content/uploads/Mini_Cone_Case_Generic_Left_Image_250x250-2.png"
                      role="group"
                      aria-label="product"
                      onMouseEnter={handleMouseEnterPopcorn}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="product-box product-mini justify-end flex items-center flex-col relative"
                        style={{ background: "#F28220" }}
                        bis_skin_checked="1"
                      >
                        <div
                          className="absolute product-image"
                          bis_skin_checked="1"
                        >
                          <img
                            src="https://www.popcornopolis.com/wp-content/uploads/2021/07/img1.png"
                            alt="A picture of a mini cone of Popcornopolis® gourmet popcorn."
                            width="87"
                            className="product-img-own"
                          />
                        </div>

                        <h3 className="product-name">Mini Cones </h3>

                        <div className="product-info" bis_skin_checked="1">
                          <span aria-hidden="true">11" Tall</span>{" "}
                          <span className="sr-only">11" inches tall</span>
                        </div>

                        <div className="product-text" bis_skin_checked="1">
                          40-70 Cones
                        </div>

                        <div className="product-price" bis_skin_checked="1">
                          <small>From </small>
                          <span>$79.99 </span>
                        </div>
                        <div className="btn-wrap" bis_skin_checked="1">
                          <span
                            className="btn flex items-center justify-center wow yellow-btn secondary animated"
                            style={{ visibility: "visible" }}
                          >
                            <span>Select</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li
                      className="product-size"
                      data-image="https://www.popcornopolis.com/wp-content/uploads/Big5_PDP_PK1_Kernels_01.png"
                      role="group"
                      aria-label="product"
                      onMouseEnter={handleMouseEnterCake}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="product-box product-regular relative flex justify-end items-center flex-col"
                        style={{ background: "#F22F34" }}
                        bis_skin_checked="1"
                      >
                        <div
                          className="absolute product-image"
                          bis_skin_checked="1"
                        >
                          <img
                            src="https://www.popcornopolis.com/wp-content/uploads/2021/07/img2.png"
                            alt="A picture of a cone of Popcornopolis® gourmet popcorn."
                            width="138"
                            className="product-img-own"
                          />
                        </div>

                        <h3 className="product-name">Tall Cones </h3>

                        <div className="product-info" bis_skin_checked="1">
                          <span aria-hidden="true">15" Tall</span>{" "}
                          <span className="sr-only">15" inches tall</span>
                        </div>

                        <div className="product-text" bis_skin_checked="1">
                          6-18 Cones
                        </div>

                        <div className="product-price" bis_skin_checked="1">
                          <small>From </small>
                          <span>$32.99 </span>
                        </div>
                        <div className="btn-wrap" bis_skin_checked="1">
                          <span
                            className="btn wow flex items-center justify-center yellow-btn secondary animated"
                            style={{ visibility: "visible" }}
                          >
                            <span>
                              Select <i className="sr-only">Tall Cones</i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateYourOwn;
