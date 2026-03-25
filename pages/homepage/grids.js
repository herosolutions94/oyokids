import React from "react";

const Grids = () => {
  return (
    <>
      <section className="sec_grids">
        <div className="contain">
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/gr-1.png" alt="" />
                </div>
                <div className="content">
                  <p>Perfect Fit, No Guessing Tailored to your measurements.</p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/gr-2.png" alt="" />
                </div>
                <div className="content">
                  <p>Free Standard Shipping For Orders €150+</p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/gr-3.png" alt="" />
                </div>
                <div className="content">
                  <p>Make It Yours One-of-a-kind fashion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grids;
