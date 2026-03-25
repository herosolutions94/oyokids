import React from "react";

const Works = () => {
  return (
    <>
      <section className="work_grids">
        <div className="contain">
          <div className="main_heading">
            <h2>How Uniqli Works</h2>
          </div>
          <div className="text">
            <p>
              Uniqli makes custom fashion simple: share your design idea through
              a sketch, photo, or AI-generated concept, and our team reviews it
              to prepare an accurate quote.
            </p>
          </div>
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/w-1.png" alt="" />
                </div>
                <div className="content">
                  <h4>Share Your Vision</h4>
                  <p>
                    Upload a sketch, upload a photo, or generate a design using
                    AI. Add your description, color, fabric preferences, and
                    inspirations.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/w-2.png" alt="" />
                </div>
                <div className="content">
                  <h4>Let Us Check It</h4>
                  <p>
                    Our team reviews your design, forwards it to our partner
                    tailors, and prepares a price estimate for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/w-3.png" alt="" />
                </div>
                <div className="content">
                  <h4>Receive Your Price</h4>
                  <p>
                    You’ll receive a WhatsApp or Email within 24 hours with the
                    price. Only continue if you love it — no obligation.
                  </p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/w-4.png" alt="" />
                </div>
                <div className="content">
                  <h4>Create Your Perfect Fit</h4>
                  <p>
                    Once you approve, you’ll enter your measurements, choose
                    your type, and we’ll craft your outfit with precise
                    tailoring and quality fabrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
