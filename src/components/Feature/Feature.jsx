import React from 'react';
import "./Feature.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import propsExample from "../../images/props_example.png";
import eVarsExample from "../../images/evars_example.png";
import sessionExample from "../../images/session_example.png";
import { Carousel } from 'react-responsive-carousel';

const Feature = () => {

    const divRef = React.useRef();

  return (
    <div ref={divRef} id='examples' className='feature-container-div'>
      <div style={{ marginBottom: 20 }} />
      <h4>Examples</h4>
      <div style={{ marginBottom: 20 }} />
      <Carousel className='example-carousel' infiniteLoop emulateTouch showThumbs={false} showStatus={false}>
        <div>
          <img alt='props-example' src={propsExample} />
          <p className="legend">Props</p>
        </div>
        <div>
          <img alt='evars-example' src={eVarsExample} />
          <p className="legend">eVars</p>
        </div>
        <div>
          <img alt='session-example' src={sessionExample} />
          <p className="legend">Session</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Feature;