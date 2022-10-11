import style from './Card.module.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

function Card(props) {
    const { data, onAddFavorite, onIdSelected, expandCard } = props;
    const [ buttonFavourite, setButtonFavourite ] = useState(false);
    
    const onFavouriteClick = () => {
        onAddFavorite();
        setButtonFavourite(!buttonFavourite);
    }

    const onHandleExpandCard = () => {
        onIdSelected(data.id);
    }

    return(
        <div className={`${style.card} ${!expandCard && style.card_static}`}>
            <img src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <div className={style.button_container}>
                <button className={`${style.button} ${buttonFavourite && style.button_active}`} onClick={onFavouriteClick}>
                    <AiOutlineHeart />
                    <AiFillHeart />
                </button>
            </div>
            <button onClick={onHandleExpandCard} className={`${style.button_more}`}>
                VIEW MORE
            </button>
        </div>
    );
}

export { Card };