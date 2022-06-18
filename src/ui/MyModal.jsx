import React from 'react';
import style from './MyModal.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const MyModal = (props) => {
    const rootClass = [style.back]
    if (props.visible) {rootClass.push(style.active)}

    return (
        <div className={rootClass.join(' ')} onClick={() => props.setVisible(false)}>
            <div className={style.window} onClick={(e) => e.stopPropagation()}>
                <div className={style.caption}>
                    <div>{props.title}</div>
                    <div onClick={() => props.setVisible(false)}>
                        <FontAwesomeIcon icon={faXmark} className={style.x} />
                    </div>
                </div>
                <hr/>
                {props.children}
                <hr/>
                <button className={style.modalbutton} onClick={() => props.setVisible(false)}>Закрыть окно</button>
            </div>
        </div>
    );
};

export default MyModal;
