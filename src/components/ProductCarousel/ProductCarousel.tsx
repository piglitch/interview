import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './ProductCarousel.module.css';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../functions/fetchProducts';
import { Product } from '../../types/product.type';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
    price: string;
    discount: string;
}

function Card({ id, image, title, category, description, price, discount }: CardProps) {
    const navigate = useNavigate();
    const handleProductClick = (product: Product) => {
        navigate(`/products/${product.id}`);
    };
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${image})`, cursor: 'pointer' }}
            className={classes.card}
            onClick={() => {
                handleProductClick({ id, image, title, category, description, price, discount });
            }}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
            </div>
        </Paper>
    );
}

export function ProductCarousel({ product }:{ product: Product}) {
    const [data, setData] = useState<CardProps[]>([]);
    useEffect(() => {
        async function fetchProductsFromApi() {
            try {
                const path = `/category?type=${product.category}`;
                const productsFromApi = await fetchProducts(path);
                const filteredPdts = productsFromApi.products.filter((pdt: Product) => pdt.id !== product.id )
                console.log('filtered items: ', filteredPdts, product.id);
                setData(filteredPdts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProductsFromApi();
    }, [product])

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title} >
            <Card {...item} />
        </Carousel.Slide>
    ));

  return (
    <Carousel
      slideSize={mobile ? '100%' : '50%'}
      slideGap={2}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}