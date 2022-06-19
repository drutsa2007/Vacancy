import style from './MyInput.module.css';

const MyInput = ({prefix = '', size=100, maxlenght=100}) => {
  return (
    <div className={style.container}>
      {prefix && <span className={style.prefix}>{prefix}: </span>}
      <input className={style.input} size={size} maxlenght={maxlenght} />
    </div>
  );
}

export default MyInput;