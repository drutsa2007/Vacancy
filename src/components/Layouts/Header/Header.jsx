import style from './Header.module.css';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import ChangeTheme from '../../ChangeTheme/ChangeTheme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Burger from '../Burger/Burger';
import { useState } from 'react';

const Header = () => {
  const [burgerShow, setBurgerShow] = useState(false)
  return (
    <div>
        <Burger burgerShow={burgerShow} setBurgerShow={setBurgerShow}/>
    <div className={style.container}>
        <div className={style.flex}>
          {/* <img src="/img/logo.png" height="30px"/> */}
          <FontAwesomeIcon icon={faBars} className={style.burger} onClick={() => {setBurgerShow(true)}}/>
          <div>
            <input type="text" placeholder="Search" className={style.searchText}/>
            <button className={style.searchButton}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
          </div>
          
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