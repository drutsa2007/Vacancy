import style from './VacancySearch.module.css';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import MyButton from '../../ui/MyButton';

const VacancySearch = ({el}) => {
  return (
    <div className={style.vacancy}>
        <div className={style.location}>
          <FontAwesomeIcon icon={faLocationDot} style={{marginRight: "3px"}}/>
          {el.location_country}, {el.location_city}
        </div>
        <div className={style.caption}>{el.role}</div>
        <div className={style.level}>{el.level}</div>
        <div className={style.salary}>до 130 000 ₽</div>
        <div className={style.mode}>#удаленка #офис #полныйдень</div>
        <div className={style.mode}>#React #Vue, #MySQL, #Linux, #Word</div>
        <div align="right">
            <Link to={`/vacancy/${el.id}`}><MyButton title={"Смотреть"}/></Link>
        </div>
    </div>
  );
}

export default VacancySearch;