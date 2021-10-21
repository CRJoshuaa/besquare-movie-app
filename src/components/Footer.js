import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="column" id="titleIcon">
        <div className="title">{props.title}</div>
        <div className="icons">
          <ul className="social-icon">
            <li className="social-icon__item">
              <a class="social-icon__link" href="#">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>
            <li className="social-icon__item">
              <a class="social-icon__link" href="#">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li className="social-icon__item">
              <a class="social-icon__link" href="#">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li className="social-icon__item">
              <a class="social-icon__link" href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="column" id="description">
        Lorem ipsum dolor sit amet. Est placeat iusto ea perferendis cumque quo
        voluptatem iste aut maiores libero qui nihil distinctio ut velit
        ducimus. Qui cumque voluptatem sit nesciunt vero et debitis dolor ut
        praesentium repellendus et ipsa repudiandae
      </div>
      <div className="column" id="copyright">
        <p>&copy;2021 Group 6 BeSquare | All Rights Not Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
