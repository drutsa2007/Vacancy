import style from './SiteCaption.module.css';
import { faJava, faPython, faReact, faAngular, faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import {useRef, useEffect} from 'react';


const stakcs = [
	{
		icon: faJava,
		name: "java",
	},
	{
		icon: faPython,
		name: "python",
	},
	{
		icon: faReact,
		name: "react",
	},
	{
		icon: faAngular,
		name: "angular",
	},
	{
		icon: faAndroid,
		name: "android",
	},
	{
		icon: faApple,
		name: "ios",
	},
]
const levels = [{name: 'Intern'}, {name: 'Junior'}, {name: 'Middle'}, {name: 'Senior'}, {name: 'TeamLead'}]

const SiteCaption = () => {
  const r1 = useRef()
  /*let n=302783 - 1000
  let nk
  let interval = setInterval(() => {
    n = n + 1;
    if (n === 302783) {
      clearInterval(interval);
    }
    if (n>1000) nk = Math.floor(n/1000) + '.' + (n%1000).toString().padStart(3, '0');
    else nk=n
    r1.current.textContent = nk;
  }, 1);*/
  

  return (
	<div className={style.container}>

      <div className={style.filterCaption}>Поиск по технологии</div>
      <div className={style.stacks}>
        {stakcs.map((item, idx) => 
          <Link to={`/search/`+ item.name} key={idx}>
            <div className={style.stack}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
          </Link>
        )}
      </div>

      <div className={style.filterCaption}>Поиск по уровню</div>
      <div className={style.levels}>
        {levels.map((item, idx) => 
          <div className={style.level} key={idx}>
            <Link to={`/search/`+ item.name.toLowerCase()}>
                {item.name}
            </Link>
          </div>
        )}
      </div>

	</div>
  );
}

export default SiteCaption;