import "./Hero.scss";
import HeroItems from "./Items/HeroItems";

const Hero = () => {
  return (
    <div className='container-div'>
      <div className='content-div'>
        <HeroItems />
      </div>
    </div>
  )
};

export default Hero;