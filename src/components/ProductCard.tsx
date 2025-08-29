import type { Product } from '../data';

// Интерфейс для пропсов компонента
interface ProductCardProps {
    product: Product; // Объект товара, который мы получаем из data.ts
}

// Функциональный компонент карточки товара
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    // Обработчик клика по кнопке "Добавить в корзину"
    const handleAddToCartClick = () => {
        // Выводим в консоль сообщение с названием и ценой товара
        console.log(`Товар "${product.name}" добавлен в корзину. Его цена: ${product.price} шмеклей.`);
    };

    return (
        // Карточка товара с классом для стилизации
        <div className="product-card">

            {/* Изображение товара */}
            <img
                src={product.imageUrl} // Путь к изображению из данных
                alt={product.name}     // Альтернативный текст = название товара
            />

            {/* Название товара */}
            <h3>{product.name}</h3>

            {/* Описание товара */}
            <p>{product.description}</p>

            {/* Цена товара с текстом "шмеклей" */}
            <p><strong>Цена: {product.price} шмеклей</strong></p>

            {/* Кнопка с обработчиком события onClick */}
            <button onClick={handleAddToCartClick}>
                Добавить в корзину
            </button>

        </div>
    );
};

// Экспортируем компонент для использования в других файлах
export default ProductCard;