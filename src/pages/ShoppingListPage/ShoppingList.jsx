import React, { useEffect, useState } from 'react';
import { fetchShoppingList, fetchIngredientById, removeItem } from '../../api/homePageAPI'; 
import styles from './ShoppingList.module.css';
import emptyImage from './images/shoppinglist/kisspng-vegetable-fruit-basket-century-farms-international-fruits-and-vegetables-5abfb9c60122f5 1.png';

const ShoppingListPage = () => {
    const [shoppingList, setShoppingList] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            fetchShoppingList(token)
                .then(async (data) => {
                    const fullShoppingList = await Promise.all(
                        data.shoppingList.map(async item => {
                            const itemId = item._id?.$oid || item.id; 
                            console.log('Fetching ingredient with ID:', itemId);
                            if (itemId) {
                                const ingredient = await fetchIngredientById(itemId, token);
                                return { ...ingredient, measure: item.measure };
                            } else {
                                console.error('Invalid item ID:', item);
                                return null;
                            }
                        })
                    );
                 
                    setShoppingList(fullShoppingList.filter(item => item !== null));
                })
                .catch(err => {
                    console.error('Failed to fetch shopping list:', err);
                });
        } else {
            console.error('No auth token found');
            window.location.href = '/signin';
        }
    }, [token]);
    

    const handleRemove = (itemId) => {
        if (token) {
            removeItem(itemId, token).then(() => {
                setShoppingList(prevList => prevList.filter(item => item.id !== itemId));
            }).catch(err => {
                console.error('Failed to remove item:', err);
            });
        } else {
            console.error('No auth token found');
        }
    };

    return (
        <div className={styles.shoppingListPage}>
            <h1 className={styles.pageTitle}>Shopping list</h1>
            {shoppingList.length > 0 ? (
                <table className={styles.shoppingTable}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th>Products</th>
                            <th>Number</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingList.map(item => (
                            <tr key={item.id} className={styles.tableRow}>
                                <td className={styles.productCell}>
                                    <img src={item.image || 'placeholder.png'} alt={item.name} className={styles.productImage} />
                                    {item.name}
                                </td>
                                <td className={styles.numberCell}>{item.measure}</td>
                                <td className={styles.removeCell}>
                                    <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className={styles.emptyList}>
                    <img src={emptyImage} alt="Empty shopping list" className={styles.emptyImage} />
                    <p>Shopping list is empty</p>
                </div>
            )}
        </div>
    );
};

export default ShoppingListPage;
