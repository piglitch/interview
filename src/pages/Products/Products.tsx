import { useEffect, useState } from 'react';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import classes from './products.module.css';
import { mockProducts } from '../../functions/mockData';
import { useAppStore } from '../../store/app.store';
import { useNavigate } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    discount: string;
    title: string;
    image: string;
}

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const {isLoggedIn} = useAppStore();
    const navigate = useNavigate();
    // useEffect(() => {
    //     async function fetchProducts() {
    //         try {
    //             const response = await fetch('https://fakestoreapi.in/api/products');
    //             const data = await response.json();
    //             setProducts(data.products);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //         }
    //     }

    //     fetchProducts();
    // }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/log-in');
            return;
        }
        setProducts(mockProducts);
    }, []);

    return (
        <div className={classes.products}>
            {products.map((product) => (
                <Card key={product.id} withBorder radius="md" className={classes.card}>
                    <Card.Section className={classes.imageSection}>
                        <Image src={product.image} alt={product.name} />
                    </Card.Section>

                    <Group position="apart" mt="md">
                        <div>
                            <Text fw={500}>{product.name}</Text>
                            <Text fz="xs" c="dimmed">
                                {product.title}
                            </Text>
                        </div>
                        <Badge variant="outline">{product.discount}</Badge>
                    </Group>

                    <Card.Section className={classes.section}>
                        <Group spacing={30}>
                            <div>
                                <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                                    {product.price}
                                </Text>
                            </div>

                            <Button radius="xl" style={{ flex: 1 }}>
                                Buy now
                            </Button>
                        </Group>
                    </Card.Section>
                </Card>
            ))}
        </div>
    );
}
