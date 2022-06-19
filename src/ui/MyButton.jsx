import style from './MyButton.module.css';

const MyButton = ({title}) => {
  return (
    <div><button className={style.button}>
      {title}
    </button></div>
  );
}

export default MyButton;