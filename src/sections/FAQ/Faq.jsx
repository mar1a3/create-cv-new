import { Element } from 'react-scroll';
import { FaqItem } from '../../components/FaqItem/FaqItem';

import './style.css';

export const Faq = () => {
  return (
    <section className="faq-section">
      <Element name="faq">
        <div className="faq-container">
          <div className="faq-title">
            <h3>F A Q</h3>
          </div>
          <div className="questions">
            <FaqItem />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
