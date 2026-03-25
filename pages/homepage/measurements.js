import Link from "next/link";
import React from "react";

const Measurements = () => {
  return (
    <>
      <section className="measurments">
        <div className="contain">
          <div className="main_heading">
            <div className="headings">
              <h2>Your Measurements — Simplified</h2>
              <p>
                Never measured before? Don’t worry.
                <br /> We guide you step-by-step to make sure you get the
                perfect fit — every time.
              </p>
            </div>
            <div className="cta">
              <Link href="" className="site_btn">
                How to Measure
              </Link>
            </div>
          </div>
          {/* <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/m-1.png" alt="" />
                </div>
                <div className="content">
                  <h4>Watch Our Quick Measurement Video</h4>
                  <div className="title">
                    <p>Learn in under 60 seconds.</p>
                  </div>
                  <p>
                    A simple visual guide that shows you how to measure each
                    part of your body accurately. No tools required except a
                    measuring tape.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/m-2.png" alt="" />
                </div>
                <div className="content">
                  <h4>Follow Visual Instructions</h4>
                  <div className="title">
                    <p>Clear visuals + short explanations.</p>
                  </div>
                  <p>
                    You’ll see exactly where to place the tape and how
                    tight/loose each measurement should be. Perfect for
                    beginners.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/m-3.png" alt="" />
                </div>
                <div className="content">
                  <h4>Download the Measurement Sheet</h4>
                  <div className="title">
                    <p>Prefer manual measurements?.</p>
                  </div>
                  <p>
                    Download a clean, printable measurement sheet to write
                    everything down neatly. You can even hand it over to your
                    tailor or partner to help.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="img">
            <img src="images/m-2-new.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Measurements;
