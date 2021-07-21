import React from "react";
import Cycle from "./Cycle img1.jpg"
let SecondCard = () => {
  return (
    <>
      <div class="card mb-3  bg-success">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={Cycle} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">THE RICHEST BABYSITTER IN THE WORLD</h3>
              <p class="card-text">
                During the interview, I realized almost immediately that the
                woman was pregnant—I guessed she was about halfway along—but she
                didn’t remark on it, and of course neither did I. Over the
                phone, we’d discussed only her 3-year-old daughter. The woman,
                whose name was Diane, was looking for a babysitter for the girl,
                whose name was Sophie, two mornings a week from 9 a.m. to noon,
                for $10 an hour. This was in late January 1997, my senior year
                at U-Dub—the University of Washington—and I’d seen the job
                advertised on an index card pinned to the bulletin board outside
                
              </p>
              <p class="card-text">
                <small class=" text-warning">Last updated 3 mins ago</small>
              </p>
              <a href="https://www.theatlantic.com/books/archive/2021/07/curtis-sittenfeld-richest-babysitter-world/619449/" class="btn btn-primary"  target="_blank">
              Read Full Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondCard;
