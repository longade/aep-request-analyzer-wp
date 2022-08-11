import React from 'react';
import "./Features.scss";

const Features = ({ heading, data }) => {
  return (
    <div className='features-container-div'>
      <h1 className='feature-h1'>{heading}</h1>
      <div className='feature-wrapper'>
        {data.map((feature, index) => (
          <div className='feature-card' key={index}>
            <img className='feature-card-img' src={feature.img} alt={feature.alt}></img>
            <div className='feature-card-info-div'>
              <h2 className='feature-card-title'>{feature.name}</h2>
              <p className='feature-card-desc'>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
