import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { AuthenticationForm } from './pages/Loginpage/loginpage';
// import Landing from './pages/landing/Landing';
import { Landing } from './pages/landing/Landing';
import { Products } from './pages/Products/Products';
import { ProductItem } from './components/productItem/productItem';
import AuthInit from './auth/Auth';


export const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Landing />
			},
			{
				path: '/log-in',
				element: <AuthenticationForm />
			},
			{
				path: '/products',
				element: <Products />
			},
			{
				path: '/products/category',
				element: <Products />
			},
			{
				path: '/products/:id',
				element: <ProductItem />
			}
		]
	}
];

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthInit>
				<RouterProvider router={router} />
			</AuthInit>
		</QueryClientProvider>
	</StrictMode>
);
