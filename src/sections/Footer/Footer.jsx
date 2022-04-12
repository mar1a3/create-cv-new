import React from 'react';
import { Element } from 'react-scroll';
import './style.css';

export const Footer = () => {
  return (
    <section className="footer_section">
      <Element name="footer">
        <div className="footer-container">
          <div className="footer-block">
            <h2 className="footer-logo">guardVPN</h2>
            <p className="footer-description">
              guardVPN is the result of an advanced approach to online security.
              We improve our service every day to ensure stable protection,
              speed and comfort. Protection starts here - from the first
              connected device.
            </p>
          </div>
          <div className="footer-block">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Main</a>
              </li>
              <li>
                <a href="#pricing">Plans</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#regions">Regions</a>
              </li>
            </ul>
          </div>
          <div className="footer-socials">
            <a className="social-link" href="">
              <img src="images/socials/telegram.png" alt="" />
            </a>
            <a className="social-link" href="">
              <img src="images/socials/linkedin.png" alt="" />
            </a>
            <a className="social-link" href="">
              <img src="images/socials/facebook.png" alt="" />
            </a>
          </div>
        </div>
      </Element>
    </section>
  );
};
