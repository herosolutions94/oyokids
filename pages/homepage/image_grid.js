import Link from "next/link";
import React from "react";

const ImageGrid = () => {
  return (
    <>
      <section className="image_grids">
        <div className="contain">
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/im-1.png" alt="" />
                  <div className="content">
                    <h4>Sketched by You</h4>
                    <p>
                      to make custom fashion accessible, modern, and beautifully tailored.
                    </p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Start with a Sketch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/seen.webp" alt="" />
                  <div className="content">
                    <h4>Seen & Snapped</h4>
                    <p>
                      Upload a reference photo — a Pinterest look, a dress you
                      saw, anything you love.
                    </p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Upload Photo — Let’s Go!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/im-3.png" alt="" />
                  <div className="content">
                    <h4>Dream with AI</h4>
                    <p>
                      Describe your idea or chat with AI to generate your
                      perfect design.
                    </p>
                    <div className="cta">
                      <Link href="" className="site_btn">
                        Generate with AI
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGrid;
