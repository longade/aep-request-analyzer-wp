import Feature from "../../components/Feature/Feature";
import Products from "../../components/Products/Products";
import { productData, productDataTwo } from '../../components/Products/data';
import Hero from "../../components/Hero/Hero";

export default function Home() {

    return (
        <>
            <Hero />
            <Products heading='Features' data={productData} />
            <Feature />
            {/* <Products heading='Sweet Treats for You' data={productDataTwo} /> */}
        </>
    );
}