import { Container, Grid, SimpleGrid } from '@mantine/core';
import { useAppStore } from '../../store/app.store';
import { useEffect, useState } from 'react';
import { mockProducts } from '../../functions/mockData';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchProducts } from '../../functions/fetchProducts';

const PRIMARY_COL_HEIGHT = '500px';

export function ProductItem() {
    const [item, setItem] = useState({id: 0, image: '', name: '', description: '', price: '', discount: ''});
    const params = useParams();
    const { isLoggedIn } = useAppStore();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/log-in');
            return;
        }
        // let productArr = mockProducts.filter((product) => product.id === Number(params.id));
        async function fetchProductItem() {
            try {
                const data = await fetchProducts(`/${params.id}`);
                setItem(data.product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
        fetchProductItem();
    },[]);
    console.log('ProductItem', item);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <Container my="md">
            <SimpleGrid cols={2} spacing="md">
                <img src={item?.image} style={{ height: PRIMARY_COL_HEIGHT, borderRadius: '8px' }} alt="Product" />
                <Grid gutter="md">
                    <Grid.Col>
                        <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', padding: '8px', backgroundColor: '#f8f9fa' }}>
                            <h2>{item?.name}</h2>
                            <p>{item?.description}</p>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', padding: '8px', backgroundColor: '#f8f9fa' }}>
                            <strong>Price:</strong> ${item?.price}
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={{ height: SECONDARY_COL_HEIGHT, borderRadius: '8px', padding: '8px', backgroundColor: '#f8f9fa' }}>
                            <strong>Discount:</strong> {item?.discount}%
                        </div>
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
            <Link to="/products"> Go back to products page</Link>
        </Container>
    );
}