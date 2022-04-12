import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { plans } from '../../components/constants/index.js';
import { Button } from '../../components/Button/Button.jsx';
import './style.css'; // Подключение CSS

export const Plans = () => {
  const [monthly, setMonthly] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // once = анимация только 1 раз
  }, []);

  return (
    <section>
      <Element name="plans">
        <div className="pricing-container">
          <div className="pricing-head">
            <h3 className="title">Fair pricing model</h3>

            <div className="pricing-toggle">
              <button
                className={`pricing-btn ${monthly ? 'active' : ''}`}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`pricing-btn ${!monthly ? 'active' : ''}`}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div className={`pricing-slider ${!monthly ? 'move' : ''}`}></div>
            </div>
          </div>

          <div className="pricing-list">
            {plans.map((plan, index) => (
              <div key={plan.id} 
              className="pricing-plan" 
              data-aos="fade-up"
              data-aos-delay={index * 100} >
                {index === 1 && <div className="highlight" />}
                <div className="plan-content">
                  <div
                    className={`plan-title ${index === 1 ? 'highlight-text' : ''}`}
                  >
                    {plan.title}
                  </div>

                  <div className="plan-price">
                    <div
                      className={`price ${index === 1 ? 'highlight-text' : ''}`}
                    >
                      ${' '}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="price-unit">/ mo</div>
                  </div>
                </div>

                <div
                  className={`plan-caption ${index === 1 ? 'bordered' : ''}`}
                >
                  {plan.caption}
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature} className="feature-item">
                      <img
                        src={'images/check.png'}
                        alt="check"
                        className="feature-icon"
                      />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="plan-button">
                  <Button>Get Started</Button>
                </div>

                {index === 1 && (
                  <p className="limited-offer">Limited time offer</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
