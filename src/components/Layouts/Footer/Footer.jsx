import style from './Footer.module.css';
import FooterMenuItem from '../FooterMenuItem/FooterMenuItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
 
const Footer = () => {
    return (
      <div className={style.container}>
          <div className={style.flex}>
            <FooterMenuItem>
              <FontAwesomeIcon icon={faLeftLong}/>
            </FooterMenuItem>
            <FooterMenuItem>
              <FontAwesomeIcon icon={faRightLong}/>
            </FooterMenuItem>
          </div>
      </div>
    );
}
 
export default Footer;