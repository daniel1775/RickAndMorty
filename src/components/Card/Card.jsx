import style from './Card.module.scss';

function Card(props) {
    const { data, onAddFavorite } = props;

    return(
        <div className={style.card}>
            <img src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <button onClick={onAddFavorite}>Add to favorites</button>
        </div>
    );
}

export { Card };