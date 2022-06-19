import style from './MyCheckbox.module.css';

const MyCheckbox = ({title}) => {
  return (
    <div className={style.checkbox}>
      <input type="checkbox" value="asd"/> {title}
    </div>
  );
}

export default MyCheckbox;