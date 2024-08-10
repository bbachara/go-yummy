import React, { useEffect, useState } from 'react';
import { MainPageTitle } from '../../components/MyRecipesPage/MainPageTitle/MainPageTitle';
import { fetchShoppingList, removeItem } from '../../api/homePageAPI'; 
import './ShoppingList.module.css';

const ShoppingListPage = () => {
    const [shoppingList, setShoppingList] = useState([]);
    const token = localStorage.getItem('token'); // Pobierz token z localStorage

    useEffect(() => {
        console.log('Token:', token); // Sprawdzanie, czy token jest pobierany
        if (token) {
            // Pobierz listę zakupów z API, gdy komponent jest montowany
            fetchShoppingList(token).then(data => setShoppingList(data)).catch(err => {
                console.error('Failed to fetch shopping list:', err);
            });
        } else {
            console.error('No auth token found');
            // Opcjonalnie możesz przekierować użytkownika na stronę logowania
            window.location.href = '/signin';
        }
    }, [token]);

    const handleRemove = (itemId) => {
        if (token) {
            // Usuń element z listy zakupów
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
        <div className="shopping-list-page">
            <MainPageTitle title="Shopping list" />
            <table>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Number</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.length > 0 ? (
                        shoppingList.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.image || 'placeholder.png'} alt={item.name} />
                                    {item.name}
                                </td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button onClick={() => handleRemove(item.id)}>X</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No items in your shopping list.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ShoppingListPage;
