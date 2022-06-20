import style from './Burger.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Burger = (props) => {
	const rootClass = [style.back]
	if (props.burgerShow) {rootClass.push(style.active)}

  return (
    <div className={rootClass.join(' ')}>
      <div onClick={() => props.setBurgerShow(false)} align="right">
          <FontAwesomeIcon icon={faXmark} className={style.x}/>
      </div>
      <div className={style.sidebarMenu}>
        <Link to="/">Личный кабинет</Link>
        <Link to="/">Выход</Link>
        <Link to="/">Вход</Link>
        <Link to="/">Регистрация</Link>
      </div>
    </div>
  );
}

export default Burger;