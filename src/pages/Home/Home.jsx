import Feature from "../../components/Feature/Feature";
import Features from "../../components/Features/Features";
import { featuresData } from '../../components/Features/data';
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Features heading='Features' data={featuresData} />
      <Feature />
    </>
  );
}

export default Home;