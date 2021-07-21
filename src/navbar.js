import React from "react";
const NavBar = (props) => {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand f" href="/">
            <i class="icon-book icon-2x"> </i>
            Welcome To My Blog
          </a>
          <ul class="nav justify-content-end ">
            <li class="nav-item">
              <a class="navbar-brand" aria-current="page" href="#">
                Home <i class="icon-home"> </i>
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="#">
                Join us <i class="icon-plus-sign"> </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;