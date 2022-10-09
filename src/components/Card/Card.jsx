import style from './Card.module.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

function Card(props) {
    const { data, onAddFavorite } = props;
    const [ buttonFavourite, setButtonFavourite ] = useState(false);
    const [ buttonMore, setButtonMore ] = useState(false);
    
    const onFavouriteClick = () => {
        onAddFavorite();
        setButtonFavourite(!buttonFavourite);
    }

    const onButtonMoreClick = () => {
        setButtonMore(!buttonMore);
    }

    return(
        <div className={`${style.card} ${buttonMore && style.card_expand}`}>
            <img src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <div className={style.button_container}>
                <button className={`${style.button} ${buttonFavourite && style.button_active}`} onClick={onFavouriteClick}>
                    <AiOutlineHeart />
                    <AiFillHeart />
                </button>
            </div>
            <button onClick={onButtonMoreClick} className={`${style.button_more}`}>
                VIEW MORE
            </button>
        </div>
    );
}

export { Card };