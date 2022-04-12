import React from 'react';
import { Element } from 'react-scroll';
import { regions } from '../../components/constants/index';

import './style.css';

export function Regions() {
  return (
    <section className="regions__section">
      <Element name="regions">
        <div className="regions-container">
          <h1 className="regions-title">Avaliable regions</h1>
          <div className="regions-block">
            {regions.map((region) => (
              <div key={region.id} className="region">
                <div className="left-side">
                  <p>{region.state}</p>
                  <p>{region.capital}</p>
                </div>
                <div className="right-side">
                  <img src={region.image} alt="" />
                  <p>{region.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
}
