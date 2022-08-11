import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import easyToUseImg from "../../images/easy-to-use.jpg";
import balloonsImg from "../../images/balloons.jpg";
import openSourceImg from "../../images/github-open-source.png";

export const productData = [
  {
    img: easyToUseImg,
    alt: 'easy-to-use',
    name: 'Easy to use',
    desc:
      ' A simple extension to discover what params have been passed to analytics',
  },
  {
    img: balloonsImg,
    alt: 'light',
    name: 'Light',
    desc:
      ' A light extension with no impacts on browser performance',
  },
  {
    img: openSourceImg,
    alt: 'free',
    name: 'Free',
    desc:
      ' Free extension with open-source code hosted on GitHub',
  }
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Donuts',
    name: 'Doughlicious',
    desc:
      'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
    price: '$9.99',
    button: 'Add to Cart'
  },
  {
    img: sweet3,
    alt: 'Ice Cream',
    name: 'Caramel Wonder',
    desc:
      'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    price: '$12.99',
    button: 'Add to Cart'
  },
  {
    img: sweet1,
    alt: 'Brownie',
    name: 'Brownie Bunch',
    desc:
      'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
    price: '$9.99',
    button: 'Add to Cart'
  }
];
