import React from 'react';
import "./Feature.scss";
import sampleVideo from "../../videos/AEP_analyzer.mp4";

const Feature = () => {
  return (
    <div className='feature-container-div'>
      <h4>Example of usage</h4>
      <div className='div-video'>
        <video id="example-video" className='example-video' controls muted>
          <source src={sampleVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Feature;