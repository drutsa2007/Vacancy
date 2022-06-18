import style from './FooterMenuItem.module.css';
 
const FooterMenuItem = ({children}) => {
  return (
    <div className={style.menuItem  }>    
			{children}
    </div>
  );
}
 
export default FooterMenuItem;