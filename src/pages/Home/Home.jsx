import Feature from "../../components/Feature/Feature";
import Features from "../../components/Features/Features";
import { featuresData } from '../../components/Features/data';
import Hero from "../../components/Hero/Hero";
import Donate from "../../components/Donate/Donate";

const Home = () => {
  return (
    <>
      <Hero />
      <Features heading='Features' data={featuresData} />
      <Feature />
      <Donate />
    </>
  );
}

export default Home;