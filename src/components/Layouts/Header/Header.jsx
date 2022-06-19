import style from './Header.module.css';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import ChangeTheme from '../../ChangeTheme/ChangeTheme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser, faSun } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Burger from '../Burger/Burger';
import { useState } from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  const [burger, showBurger] = useState(false)
  return (
    <div>
      <Burger burgerShow={burger} setBurgerShow={showBurger}/>
      <div className={style.container}>
        <div className={style.flex}>
          <div className={style.texts}>
            <Link to="/" className={style.sitename}>Job</Link>
            <Link to="/search" className={style.search}>Search</Link>
          </div>
          <div className={style.countVacancies}><span>302.783</span> вакансий</div>
          <div className={style.texts}>
            <ChangeTheme><FontAwesomeIcon icon={faSun} className={style.changetheme} /></ChangeTheme>
            <FontAwesomeIcon icon={faCircleUser} className={style.user} onClick={() => {showBurger(true)}}/>
          </div>
          {/*<div>
            <input type="text" placeholder="Search" className={style.searchText}/>
            <button className={style.searchButton}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
  </div>*/}
          
          {/* <HeaderMenuItem>
            <FontAwesomeIcon icon={faHouse}/>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <FontAwesomeIcon icon={faFilter}/>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <ChangeTheme/>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <FontAwesomeIcon icon={faUser}/>
          </HeaderMenuItem> */}
        </div>
    </div>
    </div>
  );
}
 
export default Header;