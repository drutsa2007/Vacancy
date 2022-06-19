//import style from './ChangeTheme.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import themes from './themeSettings';

const ChangeTheme = ({children}) => {
  const themes = ["dark", "light"]
  const [theme, setTheme] = useState(
    (localStorage.getItem('theme') & themes.includes(localStorage.getItem('theme'))) ? localStorage.getItem('theme') : "dark"
  )

  const changeTheme = () => {
    let root = document.querySelector(':root');
    if (theme === 'light') {
      root.style.setProperty('--background-color', '#16161a');
      root.style.setProperty('--block-color', '#282833');
      root.style.setProperty('--font-color', '#FFFFF0');
      setTheme('dark')
      localStorage.setItem("theme", "dark")
    }
    else {
      root.style.setProperty('--background-color', '#FFFFF0');
      root.style.setProperty('--block-color', '#E6E6E1');
      root.style.setProperty('--font-color', '#16161a');
      setTheme('light')
      localStorage.setItem("theme", "light")
    }
  }

  return (
   <span onClick={changeTheme}>{children}</span>
  );
}


//<FontAwesomeIcon icon={faCircleHalfStroke} />
//<FontAwesomeIcon icon={faLightbulb} style={ 
//        (theme === "dark") ? {"color": "#ffffff"} : {"color": "#555555"}}/>

export default ChangeTheme;