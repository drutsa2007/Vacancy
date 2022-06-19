import style from './MySelect.module.css';

const MySelect = ({option_default = "Выбрать...", options}) => {
  return (
    <div>
        <select className={style.select}>
            <option value="">{option_default}</option>
            {options.map((el, idx) => <option key={idx} value={el}>{el}</option>)}
        </select>
    </div>
  );
}

export default MySelect;