import React from "react";
import img1 from "./apj1.jpg";
import img2 from "./apj2.jpg";
import img3 from "./apj3.jpg";
const Slider = (props) => {
  return (
    <>
      <div class="card mb-3  bg-light">
        <div class="row g-0">
          <div class="col-md-10">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active  text-dark ">
                  <img src={img1} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 class ="text-success">First Quotes</h5>
                    <p class ="text-danger">
                    All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents
                    </p>
                  </div>
                </div>
                <div class="carousel-item text-dark ">
                  <img src={img2} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 class="text-success">Second slide label</h5>
                    <p class ="text-dark fs-6">
                    “If you want to shine like a sun. First burn like a sun.” – Dr. APJ Abdul Kalam
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={img3} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 class="text-success">Third slide label</h5>
                    <p class ="text-dark">
                    “All Birds find shelter during a rain. But Eagle avoids rain by flying above the Clouds” – Dr. APJ Abdul Kalam
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="col-md-2">
            <div class="card-body">
              <h4 class="card-title">
              Dr. APJ Abdul Kalam 
              </h4>
              <p class="card-text">
                Born on 15th October 1931 at Rameswaram in Tamil Nadu, Dr. Avul
                Pakir Jainulabdeen Abdul Kalam, graduated in Science from St.
                Joseph's College, Trichy in 1954 and specialized in Aeronautical
                Engineering from Madras Institute of Technology (MIT) in 1957.
                Dr. Kalam is a pioneer in fibre glass technology and led a young
                team to initiate this effort in ISRO from design,
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <a
                href="http://www.abdulkalam.com/kalam/theme/jsp/guest/myprofile.jsp"
                class="btn btn-primary"
                target="_blank"
              >
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
