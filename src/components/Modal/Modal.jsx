import style from './Modal.module.scss';
import { createPortal } from 'react-dom';

function Modal({ children }) {
    return(createPortal(
        <div className={style.modal}>
            {children}
        </div>,
        document.getElementById('modal')
    ))
}

export { Modal };