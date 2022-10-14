import style from './Card.module.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';

function Card(props) {
    const { data, onAddFavorite, onIdSelected, expandCard } = props;
    const [ buttonFavourite, setButtonFavourite ] = useState(false);
    const cardRef = useRef();
    
    const onFavouriteClick = () => {
        onAddFavorite();
        setButtonFavourite(!buttonFavourite);
    }

    const onHandleExpandCard = () => {
        onIdSelected(data.id);
    }

    useEffect(() => {
        if(expandCard) {
            setTimeout(() => cardRef.current.classList.add(style.open_card)
            , 600);
        }
    }, )

    return(
        <>
            {expandCard && 
            <>
                <div className={style.portal_top} />
                <div className={style.portal_bottom} />
            </> }
            <div className={`${style.card_container} ${expandCard && style.card_container_expand}`}>
                <div className={`${style.card} ${!expandCard ? style.card_static : style.card_expand}`} ref={cardRef}>
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
            </div>
        </>
    );
}

export { Card };