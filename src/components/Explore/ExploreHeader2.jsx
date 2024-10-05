import React from "react";
import "../css/event.css";

const ExploreHeader2 = () => {
  return (
    <section className="section-2 inner inner_slim">
      <div className=" flex event flex-col">
        <div
          className="flex-promo-highlight__left .inner_slim"
          bis_skin_checked="1"
        >
          <h2 className="h1 h1-large ">
            Upcoming <br />
            <span style={{ color: "#f22f34" }}>Celebrations</span>
            <em style={{ color: "#f22f34" }}>.</em>
          </h2>
          <div className="paragraph paragraph-l" bis_skin_checked="1">
            <p>Events and Occasions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreHeader2;
