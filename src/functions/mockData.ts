interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    discount: string;
    title: string;
    image: string;
}

const imageUrl = 'https://placehold.co/400x600';

export const mockProducts: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is the description for Product 1.',
        price: '$10',
        discount: '10% off',
        title: 'Product 1 Title',
        image: imageUrl,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is the description for Product 2.',
        price: '$20',
        discount: '15% off',
        title: 'Product 2 Title',
        image: imageUrl,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'This is the description for Product 3.',
        price: '$30',
        discount: '20% off',
        title: 'Product 3 Title',
        image: imageUrl,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'This is the description for Product 4.',
        price: '$40',
        discount: '25% off',
        title: 'Product 4 Title',
        image: imageUrl,
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'This is the description for Product 5.',
        price: '$50',
        discount: '30% off',
        title: 'Product 5 Title',
        image: imageUrl,
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'This is the description for Product 6.',
        price: '$60',
        discount: '35% off',
        title: 'Product 6 Title',
        image: imageUrl,
    },
    {
        id: 7,
        name: 'Product 7',
        description: 'This is the description for Product 7.',
        price: '$70',
        discount: '40% off',
        title: 'Product 7 Title',
        image: imageUrl,
    },
    {
        id: 8,
        name: 'Product 8',
        description: 'This is the description for Product 8.',
        price: '$80',
        discount: '45% off',
        title: 'Product 8 Title',
        image: imageUrl,
    },
    {
        id: 9,
        name: 'Product 9',
        description: 'This is the description for Product 9.',
        price: '$90',
        discount: '50% off',
        title: 'Product 9 Title',
        image: imageUrl,
    },
    {
        id: 10,
        name: 'Product 10',
        description: 'This is the description for Product 10.',
        price: '$100',
        discount: '55% off',
        title: 'Product 10 Title',
        image: imageUrl,
    },
    {
        id: 11,
        name: 'Product 11',
        description: 'This is the description for Product 11.',
        price: '$110',
        discount: '60% off',
        title: 'Product 11 Title',
        image: imageUrl,
    },
    // {
    //     id: 12,
    //     name: 'Product 12',
    //     description: 'This is the description for Product 12.',
    //     price: '$120',
    //     discount: '65% off',
    //     title: 'Product 12 Title',
    //     image: imageUrl,
    // },
];