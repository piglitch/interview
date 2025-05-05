import { Container, Grid, SimpleGrid } from '@mantine/core';
import { useAppStore } from '../../store/app.store';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchProducts } from '../../functions/fetchProducts';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { Product } from '../../types/product.type';

const PRIMARY_COL_HEIGHT = '500px';

export function ProductItem() {
    // const { id } = useParams<{ id: string }>();
    const emptyPrdoduct: Product = {
        id: 0,
        title: '',
        description: '',
        price: '',
        discount: '',
        image: '',
        category: ''
    };
    const [item, setItem] = useState(emptyPrdoduct);
    const params = useParams();
    const { isLoggedIn, isAuthLoaded } = useAppStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthLoaded){
            if (!isLoggedIn) {
                navigate('/log-in');
                return;
            }
        }
        async function fetchProductItem() {
            try {
                const data = await fetchProducts(`/${params.id}`);
                setItem(data.product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
        fetchProductItem();
    }, [params]);
    console.log('ProductItem', item);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <>
            {isLoggedIn ? (
            <Container my="md" pb={100} style={{ marginTop: '80px' }}>
                <SimpleGrid cols={2} spacing="md">
                <div>
                    <h3 title={item?.title}>
                    {item?.title.split(' ').length > 10 
                        ? `${item.title.split(' ').slice(0, 10).join(' ')}...` 
                        : item?.title}
                    </h3>
                    <img width={400} height={150} src={item?.image} style={{ height: PRIMARY_COL_HEIGHT, borderRadius: '8px' }} alt="Product" />
                </div>                        
                <Grid gutter="md">
                    <Grid.Col>
                    <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', padding: '8px', backgroundColor: '#f8f9fa' }}>
                        <h2>Description</h2>
                        <p style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px', padding: '12px' }}>{item?.description}</p>
                    </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', padding: '8px', backgroundColor: '#f8f9fa' }}>
                        <strong>Price:</strong> ${item?.price ? item.price : 'NA' }
                    </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                    <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', padding: '8px', backgroundColor: '#f8f9fa' }}>
                        <strong>Discount:</strong> {item?.discount ? item.discount : 'NA'}%
                    </div>
                    </Grid.Col>
                </Grid>
                </SimpleGrid>
                <div 
                style={{
                    background: "linear-gradient(10deg, var(--active-background-color-start, #f55442), var(--active-background-color-end, yellow))", 
                    width: 'max-content', 
                    borderRadius: "8px"
                    }}>
                    <Link style={{
                        textDecoration: 'none', color: 'black', padding: '8px'}} 
                        to="/products"> &larr; Go back to products page
                    </Link>
                    </div>
                {item.id !== 0 && 
                <div style={{ paddingTop: '18px', paddingBottom: '18px'}}>
                    <h2>Related products</h2>
                    <ProductCarousel product={item} />
                </div>
                }
            </Container>
            ) : (
            <div>Please log in to view this product.</div>
            )}
        </>
    );
}