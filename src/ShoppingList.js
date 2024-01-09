const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 }
]

const ShoppingList = () => {
    return (
        <div>
            <h3>ShoppingList</h3>
            <ul>
                {products.map
                    ((product) => (
                        <li style={{ color: product.isFruit ? "red" : "blue" }}>
                            {product.title}
                        </li>
                    ))}
            </ul>
        </div>
    )
};

export default ShoppingList;