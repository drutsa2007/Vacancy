import style from './SiteCaption.module.css';
import { Link } from "react-router-dom";
import {levels, stacks} from '../../addons/filter';
import MyLoader from '../../ui/MyLoader';


const SiteCaption = () => {  
  return (
	<div className={style.container}>
      <MyLoader/>
      asdasd
      {/* <div className={style.caption}>Поиск по стеку технологий</div>
      <div className={style.levels}>
        {stacks.map((item, idx) => 
          <div className={style.level} key={idx}>
            <Link to={`/search?stack=`+ item}>
              {item}
            </Link>
          </div>
        )}
      </div>

      <div className={style.caption}>Поиск по уровню</div>
      <div className={style.levels}>
        {levels.map((item, idx) => 
          <div className={style.level} key={idx}>
            <Link to={`/search?level=`+ item}>
                {item}
            </Link>
          </div>
        )}
      </div> */}

	</div>
  );
}

export default SiteCaption;