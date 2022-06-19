import style from './Burger.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ChangeTheme from '../../ChangeTheme/ChangeTheme';

const Burger = (props) => {
	const rootClass = [style.back]
	if (props.burgerShow) {rootClass.push(style.active)}

  const closeBurger = () => {
    props.setBurgerShow(false)
  }

  return (
    <div className={rootClass.join(' ')} onClick={() => props.setBurgerShow(false)}>
        <div className={style.window} onClick={(e) => e.stopPropagation()}>
            <div className={style.caption}>
								<div>{props.title}</div>
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
        </div>
    </div>
  );
}

export default Burger;