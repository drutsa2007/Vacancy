import style from './Filter.module.css';
import MyInput from '../../ui/MyInput';
import MyButton from '../../ui/MyButton';
import MyCheckbox from '../../ui/MyCheckbox';
import MySelect from '../../ui/MySelect';

const Filter = () => {
  const handleSubmit = () => {console.log(123);}
  const technologies = [
    "Frontend developer", "Backend developer", "Fullstack developer", "Desktop developer", "Mobile developer",
    "QA engineer", "Database developers", "DevOps engineer", "Data scientists"
  ]
  const languages = [
    "Python", "Java", "C/C++", "C#", "Kotlin", "Go", "PHP", "JavaScript", "TypeScript", "Swift", "Ruby"
  ]
  const frameworks = [
    "Django", "Flask", "Laravel", "Yii/Yii2", "Simfony", "React", "Vue", "Angular"
  ]
  const levels = [
    "Intern", "Junior", "Middle", "Senior", "TeamLead"
  ]

  return (
    <div>
      <div className={style.searchBlock}>
        <div className={style.caption}>Фильтрация</div>
        <form onSubmit={handleSubmit()}>   
          <div className={style.subtitle}>Стек технологий:</div>
          <MySelect options={technologies}/>
          <hr />

          <div className={style.subtitle}>Языки программирования:</div>
          <MySelect options={languages}/>
          <hr />

          <div className={style.subtitle}>Фреймворки:</div>
          <MySelect options={frameworks}/>
          <hr />

          <div className={style.subtitle}>Уровень:</div>
          <MySelect options={levels}/>
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
          <MyButton title={"Поиск"}/>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Filter;