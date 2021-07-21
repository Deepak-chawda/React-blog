import React from "react";
import Technology from "./technology.jpg";
let ThirdCard = (props) => {
  return (
    <>
      <div class="card mb-3  bg-success">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">
                Operational technology vs. information technology explained
              </h3>

              <p class="card-text">
                Like the rails of a train track, information systems technology
                and operational technology seemed to run a parallel course that
                would never meet. But what might be true for railroading,
                doesn't hold up in the world of business technology. Although
                some companies still treat these two disciplines as separate but
                equal proficiencies, most have found that there's much to gain
                by converging IT and OT -- enough to offset what is often an
                arduous integration task. OT's focus is on the physical devices
              </p>
              <p class="card-text">
                <small class="text-warning">Last updated 1 Day ago</small>
              </p>
              <a
                href="https://www.theatlantic.com/books/archive/2021/07/curtis-sittenfeld-richest-babysitter-world/619449/"
                class="btn btn-primary" target="_blank"
              >
                Read Full Article
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <img src={Technology} class="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdCard;
