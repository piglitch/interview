export async function fetchProducts(path: string) {
    try {
        const response = await fetch('https://fakestoreapi.in/api/products' + path);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
