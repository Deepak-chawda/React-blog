import React from "react";
// import "./first-card.css";
const Firstcard = (props) => {
  return (
    <>
      <div class="row m-3">
        <div class="col-sm-4">
          <div class="card">
            {/* here i am passing dynamic data */}
            <img src={props.Proimg} class="card-img-top" alt="Progress img" />
            <div class="card-body">
              <h3 class="card-title">{props.proheding}</h3>
              <p class="card-text">{props.prodiscri}</p>
              <a href={props.prolink} class="btn btn-primary"  target="_blank">
                {props.moreread}
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src={props.Rivimg} class="card-img-top" alt="River img" />
            <div class="card-body">
              <h3 class="card-title">{props.rivheading}</h3>
              <p class="card-text">{props.rivdiscri}</p>
              <a href={props.rivlink} class="btn btn-primary" target="_blank">
                {props.moreread}
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src={props.Richimg} class="card-img-top" alt="RichesWold " />
            <div class="card-body">
              <h3 class="card-title">{props.richheading}</h3>
              <p class="card-text">{props.richdiscri}</p>
              <a href={props.richlink} class="btn btn-primary"  target="_blank">
                {props.moreread}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Firstcard;
