import React from "react";
const Footer = () => {
  return (
    <>
      <footer class="bd-footer p-3 p-md-5 mt-5 text-center text-muted bg-dark">
        <div class="container">
          <p>News Blog App Copyright &copy; 2021</p>
          <p class="mb-0">
            Designed and built with all the love in the world by the team with
            the help of our contributors.
          </p>
          <ul class="nav  justify-content-center bg-dark fs-4">
            <li class="m-2">
              <a href="https://github.com/" class="nav-link"  target="_blank">
                <i class="icon-github-sign" > </i> GitHub
              </a>
            </li>
            <li class="m-2">
              <a href="https://twitter.com/" class="nav-link"  target="_blank">
                <i class="icon-twitter-sign"> </i> Twitter
              </a>
            </li>
            <li class="m-2">
              <a href="https://www.instagram.com/" class="nav-link"  target="_blank">
                <i class="icon-instagram"> </i>Instagram
              </a>
            </li>
            <li class="m-2">
              <a href="https://web.whatsapp.com/" class="nav-link"  target="_blank">
                <i class="icon-phone-sign"> </i>Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
