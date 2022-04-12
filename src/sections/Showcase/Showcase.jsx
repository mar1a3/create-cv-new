import React from 'react';
import { Element } from 'react-scroll';
import './style.css';

export function Showcase() {
  return (
    <section className="showcase__section">
      <Element name="showcase">
        <div className="showcase__container">
          <h1>
            Secure <br />
            VPN Service
          </h1>
          <p>
            Protect your data, hide your online activity
            <br />
            and access blocked sites around the world.
          </p>
          <div className="buttons">
            <img src="images/logos/google-play.png" alt="Google play" />
            <img src="images/logos/app-store.png" alt="App Store" />
          </div>
          <div className="phone-image">
            <img src="images/showcase-phone.png" alt="VPN Phone" />
          </div>
        </div>
      </Element>
    </section>
  );
}
