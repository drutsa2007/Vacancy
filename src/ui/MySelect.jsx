import style from './MySelect.module.css';

const MySelect = ({option_default = "Выбрать...", options, current = ""}) => {
  return (
    <div>
        <select className={style.select} defaultValue={current}>
            <option value="">{option_default}</option>
            {options.map((el, idx) => {
              return (
                <option 
                  key={idx} 
                  value={el}
                >
                  {el}
                </option>
              )
            })}
        </select>
    </div>
  );
}

export default MySelect;