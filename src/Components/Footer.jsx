import React from "react";

let Footer = () => {
  return (
    <>
      <div className="main-footer-con">
        <div className="footer-section">
          <div className="left-footer-sec">
            <p className="footer-paragraph">
              Made with ❤️ By{" "}
              <a
                href="https://www.linkedin.com/in/shubhamsprofile/"
                target="blank"
              >
                Shubham Kumar
              </a>
            </p>
          </div>
          <div className="right-footer-sec">
            <div className="social-icons">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
