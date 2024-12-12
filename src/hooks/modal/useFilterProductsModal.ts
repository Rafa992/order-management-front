import { selectAllProducts, selectSearchProducts } from '@/redux/slices/productsSlice';
import { useAppSelector } from '@/redux/store';

export default function useFilterProductsModal() {
    const products = useAppSelector(selectAllProducts);
    const searchProduct = useAppSelector(selectSearchProducts)

    const filteredProducts = () => {
        if (!products) return [];
        const lowerCaseSearch = searchProduct.toLowerCase().trim();
        return lowerCaseSearch
          ? products.filter((product) =>
              product.title.toLowerCase().includes(lowerCaseSearch)
            )
          : products;
    }

    return {
      filteredProducts: filteredProducts(),
    }
}
