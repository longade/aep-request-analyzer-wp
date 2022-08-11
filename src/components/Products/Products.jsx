import React from 'react';
import ProductsContainer from './Container/ProductsContainer';
import ProductsHeading from './Heading/ProductsHeading';
import ProductWrapper from './Wrapper/ProductWrapper';
import ProductCard from './Card/ProductCard';
import ProductImage from './Card/Image/ProductImage';
import ProductInfo from './Card/Info/ProductInfo';

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading heading={heading} />
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImage src={product.img} alt={product.alt} />
                            <ProductInfo
                                name={product.name}
                                desc={product.desc}
                            />
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    );
};

export default Products;
