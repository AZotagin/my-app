import { rickAndMortyProducts } from './data';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
    return (
        <>
            <h1>Магазин Рика и Морти</h1>
            <div className="gallery-container">
                {rickAndMortyProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default App;