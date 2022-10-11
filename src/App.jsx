import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';

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

const handlePortal = (event) => {
    console.log('event: ', event);
}

function App() {
    const [ data, setData ] = useState([]);
    const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState);
    const [ idExpandCard, setIdExpandCard ] = useState(0);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(resJson => setData(resJson.results))
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    const handleIdCard = (id) => {
        setIdExpandCard(id);
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
                        handleModalCard={false}
                        onIdSelected={handleIdCard}
                        onAddFavorite={() => handleClick(item)}
                    />
                )}
            </div>
            {idExpandCard != 0 && 
                <Modal>
                    <Card 
                        data={data.find(item => item.id == idExpandCard)}
                        expandCard={true}
                        onIdSelected={handleIdCard}
                    />
                </Modal>
            }
        </div>
    );
}

export default App;
