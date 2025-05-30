import { useEffect, useState } from 'react';
import { Badge, Button, Card, Center, Group, Image, Loader, Text } from '@mantine/core';
import classes from './products.module.css';
import { useAppStore, useProductStore } from '../../store/app.store';
import { useNavigate } from 'react-router-dom';
import { ProductFilter } from '../../components/Productfilter/ProductFilter';
import { fetchProducts } from '../../functions/fetchProducts';
import { Searchbar } from '../../components/Searchbar/SearchBar';

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
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const isLoggedIn = useAppStore((state) => state.isLoggedIn)
    const isAuthLoaded = useAppStore((state) => state.isAuthLoaded)
    const { category } = useProductStore();
    const navigate = useNavigate();
    const searchText = useProductStore((state) => state.searchText);

    useEffect(() => {
        console.log(isAuthLoaded);
        if (isAuthLoaded) {
            console.log("auth loaded: ", isAuthLoaded);
            if (!isLoggedIn) {
                console.log("not logged in: ", isLoggedIn);
                navigate('/log-in');
                return;
            }
        }
        
        async function fetchProductsFromApi() {
            try {
                let path = '';
                if (window.location.pathname.includes('/category')) {
                    path = '/category' + window.location.search;
                } 

                const productsFromApi = await fetchProducts(path);
                setProducts(productsFromApi.products);
                setFilteredProducts(productsFromApi.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProductsFromApi();
    }, [isLoggedIn, category, navigate, isAuthLoaded]);

    useEffect(() => {
        if (products.length === 0) {
            return;
        }
        console.log(products.map((product) => product.name));
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        if (filtered.length < 1) {
            console.log('No products found');
            setFilteredProducts(products);    
            return;        
        }
        setFilteredProducts(filtered);
    }, [searchText]);
      

    const handleProductClick = (product: Product) => {
        // setProduct(product);
        navigate(`/products/${product.id}`);
    };
    
    return (
        <>
            {isLoggedIn && products.length > 0 ? (
                <div className={classes.wrapper}>
                    <div className={classes.productFilter}>
                        <div><ProductFilter /></div>
                        <div><Searchbar /></div>
                    </div>
                    <div className={classes.products}>
                        {filteredProducts.map((product) => (
                            <Card key={product.id} withBorder radius="md" className={classes.card}>
                                <Card.Section className={classes.imageSection} onClick={() => handleProductClick(product)}>
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
                                                ${product.price}
                                            </Text>
                                        </div>

                                        <Button radius="xl" style={{ flex: 1 }} onClick={() => handleProductClick(product)}>
                                            Details
                                        </Button>
                                    </Group>
                                </Card.Section>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : (
                <Center style={{ height: '100vh' }}>
                    <Loader />
                </Center>
            )}
        </>
    );
}
