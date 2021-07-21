import React from "react";
const Joinus = () => {
  return (
    <>
      <body>
        <div class="container ">
          <div class="content col-md-9 mt-5  d-flex   flex-wrap justify-content-center  bg-success rounded-3">
            <div class="col-md-6 mb-3">
              <div class="col-md m-2">
                <img src="./images/regis2.svg" width="100%" height="100%" />
              </div>
              <div class="col-md-6">
                <h3 class="signin-text mb-3 text-center">
                  Registration From
                </h3>
                <form class="form-container">
                  <div class="form-group">
                    <label for="email">Username</label>
                    <span class="add-on">
                      <i class="icon-user"></i>
                    </span>
                    <input
                      type="text"
                      name="username"
                      class="form-control p-2"
                      id="username"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <span class="add-on">
                      <i class="icon-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      class="form-control p-2"
                      id="emailAddress"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <span class="add-on">
                      <i class="icon-key"></i>
                    </span>
                    <input
                      type="password"
                      name="password"
                      class="form-control p-2"
                      id="password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Conform password</label>
                    <span class="add-on">
                      <i class="icon-key"></i>
                    </span>
                    <input
                      type="password"
                      name="conform-password"
                      class="form-control p-2"
                      id="conform-password"
                    />
                  </div>
                  <div class="d-grid gap-2 col-12 mx-auto mt-3">
                    <button class="btn btn-dark " type="button" id="submitform">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default Joinus
