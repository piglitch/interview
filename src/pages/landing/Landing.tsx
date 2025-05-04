import { Button, Container, Group, Text } from '@mantine/core';
// import { IconBrandGithub } from '@tabler/icons-react';
import classes from './landing.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store/app.store';

export function Landing() {
	const navigate = useNavigate();
	const { userName, isLoggedIn } = useAppStore();
	const handleProductPage = () => {
		if(isLoggedIn) {
			navigate('/products');
			return;
		}
		navigate('/log-in');
	};
	return (
		<div className={classes.wrapper}>
			<Container size={700} className={classes.inner}>
				<h1 className={classes.title}>
					Welcome to{' '}
					<Text component="span" variant="gradient" gradient={{ from: 'orange', to: 'yellow' }} inherit>
						ShopEase
					</Text>{' '}
					– Your One-Stop Online Store
				</h1>

				<Text className={classes.description} color="dimmed">
					Discover millions of products at unbeatable prices. From electronics to fashion, we have
					everything you need, delivered right to your doorstep.
				</Text>

				<Group className={classes.controls}>
					<Button
						size="xl"
						className={classes.control}
						variant="gradient"
						gradient={{ from: 'orange', to: 'yellow' }}
						onClick={handleProductPage}
					>
						Start Shopping
					</Button>
				</Group>
			</Container>
		</div>
	);
}