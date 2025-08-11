import { Product } from "@/types/porduct";
import product1 from '../../public/product1.jpg';
import product2 from '../../public/product2.jpg';
import product3 from '../../public/product3.png';
import product4 from '../../public/product4.png';
import product5 from '../../public/product5.png';
import product6 from '../../public/product6.png';
import product7 from '../../public/product7.png';
import product8 from '../../public/product8.jpg';


export const ProductsData: Product[] = [
    {
        id: 1,
        name: "Modern Chair",
        description: 'Stylish cafe chair',

        image: product1,
        price: 140,
        oldPrice: 200,
        tag: "sale",
        discount: 30,
    },
    {
        id: 2,
        name: "Luxury Sofa",
        description: 'Stylish cafe chair',
        image: product2,
        price: 300,
        oldPrice: 600,
        tag: "sale",
        discount: 50,
    },
    {
        id: 3,
        name: "Wooden Table",
        description: 'Stylish cafe chair',

        image: product3,
        price: 180,
        tag: "new",
    },
    {
        id: 4,
        name: "Lamp",
        description: 'Stylish cafe chair',

        image: product4,
        price: 90,
    },
    {
        id: 5,
        name: "Bookshelf",
        description: 'Stylish cafe chair',

        image: product5,
        price: 220,
        tag: "new",
    },
    {
        id: 6,
        name: "Wardrobe",
        description: 'Stylish cafe chair',

        image: product6,
        price: 500,
    },
    {
        id: 7,
        name: "Desk",
        description: 'Stylish cafe chair',

        image: product7,
        price: 250,
        oldPrice: 350,
        tag: "sale",
        discount: 30,
    },
    {
        id: 8,
        name: "Bed",
        description: 'Stylish cafe chair',

        image: product8,
        price: 800,
    },

];