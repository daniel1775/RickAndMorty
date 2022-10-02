import style from './Header.module.scss';

function Header() {
    return(
        <header className={style.header}>
            <h1>Bienvenidos a la biblioteca de Rick and Morty</h1>
        </header>
    );
}

export { Header }