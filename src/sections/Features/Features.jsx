import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { features, details } from '../../components/constants/index';
import { Button } from '../../components/Button/Button';

import './style.css';

export function Features() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="features__section">
      <Element name="features">
        <div className="features__container">
          <h3 data-aos="fade-up">Features</h3>

          <div className="cards">
            {features.map(({ id, description, icon, title, text, button }, index) => (
              <div
                key={id}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>{icon}</div>
                <div>
                  <p className="card__description">{description}</p>
                  <h2>{title}</h2>
                </div>
                <p className="card__text">{text}</p>
                <div className="card-button">
                  <Button>{button.title}</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="cards">
            <div className="details">
              {details.map(({ id, icon, title }, index) => (
                <div
                  className="detail"
                  key={id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200}
                >
                  {icon}
                  <p className="detail__title">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
}
