import style from './Filter.module.css';
import MyInput from '../../ui/MyInput';
import MyButton from '../../ui/MyButton';
import MyCheckbox from '../../ui/MyCheckbox';
import MySelect from '../../ui/MySelect';
import {useSearchParams} from 'react-router-dom';
import {levels, stacks, languages, frameworks} from '../../addons/filter';

const Filter = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div className={style.searchBlock}>
        <div className={style.caption}>Фильтрация</div>
        <form>   
          <div className={style.subtitle}>Стек технологий:</div>
          <MySelect options={stacks} current={searchParams.get("stack")}/>
          <hr />

          <div className={style.subtitle}>Языки программирования:</div>
          <MySelect options={languages}/>
          <hr />

          <div className={style.subtitle}>Фреймворки:</div>
          <MySelect options={frameworks}/>
          <hr />

          <div className={style.subtitle}>Уровень:</div>
          <MySelect options={levels} current={searchParams.get("level")}/>
          <hr />

          <div className={style.subtitle}>Зарплата</div>
          <div className={style.zp}>
            <MyInput prefix={"от"} size={6} maxlength={6}/>
            <MyInput prefix={"до"} size={6} maxlength={6}/>
          </div>
          <hr />

          <div className={style.subtitle}>Занятость:</div> {/* по умолчанию искать в офисе*/}
          <MyCheckbox title={"Полный день"}/>
          <MyCheckbox title={"Частичная занятость"}/>
          <MyCheckbox title={"Проектная оплата"}/>
          <MyCheckbox title={"Почасовая работа"}/>
          <hr />

          <div className={style.subtitle}>Дополнительно:</div>
          <MyCheckbox title={"Возможность релокации"}/>
          <MyCheckbox title={"Удаленная работа"}/>
          
          <br/>
          <div align="center"><MyButton title={"Поиск"}/></div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Filter;