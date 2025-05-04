import { useProductStore } from "../store/app.store";

export async function fetchProducts() {
    const { category } = useProductStore();
    try {
        const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${category}`);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
