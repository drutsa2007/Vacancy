import style from './Vacancy.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import MyModal from '../../ui/MyModal'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const Vacancy = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className={style.vacancy}>
        <div className={style.location}>
          <FontAwesomeIcon icon={faLocationDot} style={{marginRight: "3px"}}/>
          Россия, Москва
        </div>
        <div className={style.caption} onClick={() => {setVisible(true)}}>Python developer</div>
        <div className={style.level}>Middle</div>
        <div className={style.salary}>до 130 000 ₽</div>
        <div className={style.mode}>#удаленка #офис #полныйдень</div>
        <div className={style.mode}>#React #Vue, #MySQL, #Linux, #Word</div>
        <div align="right">
            <Link to="/vacancy/1"><button className={style.button}>Подробнее</button></Link>
        </div>

        <MyModal visible={visible} setVisible={setVisible} title={"Заголовок окна"}>
          Текст окна
  			</MyModal>
    </div>
  );
}

export default Vacancy;