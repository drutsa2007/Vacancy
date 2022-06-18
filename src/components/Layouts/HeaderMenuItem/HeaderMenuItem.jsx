import { $CombinedState } from 'redux';
import style from './HeaderMenuItem.module.css';


const HeaderMenuItem = ({children, width = ""}) => {
  return (
    <div 
      className={style.menuItem} 
      style={{
        width: (width !== "") ? width : "auto"}
      }>    
			{children}
    </div>
  );
}
 
export default HeaderMenuItem;