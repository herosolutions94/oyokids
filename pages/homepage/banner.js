import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
const Banner = () => {
  const [imgPopup, setImgPopup] = useState(false);
  const [aiPopup, setAiPopup] = useState(false);
  const router = useRouter();
  return (
    <>
      <section className="banner">
        <div className="contain">
          <div className="content">
            <h1>
              Start Creating <br />
              Your Custom Outfit
            </h1>
            <p>
              Upload your inspiration or describe your idea — <br/>we’ll help you
              turn it into a perfectly tailored design.
            </p>
            <ul className="bTn">
              <li>
                <Link
                  href=""
                  className="site_btn white_btn"
                  onClick={() => setImgPopup(true)}
                >
                  Upload Inspiration
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="site_btn"
                  onClick={() => setAiPopup(true)}
                >
                  Write Your Vision
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {imgPopup === true ? (
        <div className="popup inspiration" style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div class="contain">
                <div class="inside">
                  <h3>Upload Your Inspiration</h3>
                  <div className="upload-wrapper">
                    <label className="upload-box">
                      <input type="file" accept="image/*" />
                      <div className="content">
                        <div className="icon">
                          <img src="images/upload.png" alt="" />
                        </div>
                        <p>Welcome! Your file’s happy to hang out here!</p>
                        <span>Up to 20 images, max 5MB each.</span>
                      </div>
                    </label>
                    <div
                      className="closeBtn"
                      onClick={() => setImgPopup(false)}
                    >
                      {" "}
                      Close
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {aiPopup === true ? (
        <div className="popup ai_help" style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div class="contain">
                <div class="inside">
                  <div
                    className="crosBtn"
                    onClick={() => setAiPopup(false)}
                  ></div>
                  <h3>Describe Your Design Idea</h3>
                  <p>Tell us what you imagine — our AI will do the rest.</p>
                  <div className="upload-wrapper">
                    <textarea
                      className="input"
                      placeholder="eg. A long beige dress with minimal embroidery, loose sleeves, and a modern silhouette."
                    ></textarea>
                    <div className="Btn">
                      <button className="site_btn"   onClick={() => router.push("/result")}>Generate Designs</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
