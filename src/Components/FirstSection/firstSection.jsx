import React from "react";
import "./firstSection.scss";
function FirstSection() {
  return (
    <div className="first-section-container section">
      <h1
        data-aos="fade-right"
        data-aos-duration="700"
        className="first-section__h1"
      >
        {" "}
        ME CHAMO
      </h1>
      <h1
        data-aos="fade-right"
        data-aos-duration="900"
        className="first-section__h1"
      >
        <br /> MURILO BARBOSA
      </h1>
      <h5
        data-aos="fade-right"
        data-aos-duration="1100"
        className="first-section__h5"
      >
        SOU DESENVOLVEDOR <br /> FRONT END JÚNIOR
      </h5>
    </div>
  );
}

export default FirstSection;
