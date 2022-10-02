import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';

import { useState, useEffect, useReducer } from 'react';
import style from './App.module.scss';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

function App() {
    const [ data, setData ] = useState([]);
    const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(resJson => setData(resJson.results))
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    return (
        <div className={style.app}>
            <Header />
            <div className={style.favorites}>
                <h2>List of favorites</h2>
                {favorites.favorites.map(favorite => (
                    <li key={favorite.id}>
                        {favorite.name}
                    </li>
                ))}
            </div>
            <div className={style.cards_container}>
                {data?.map(item => 
                    <Card
                        key={item.id}
                        data={item}
                        onAddFavorite={() => handleClick(item)}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
