import style from './Main.module.css';
import Vacancy from './Vacancy';
import {useQuery} from "react-query";
import apiClient from "../../addons/apiClient";
import MyLoader from '../../ui/MyLoader';

const Main = () => {
  const { isLoading, isSuccess, data } = useQuery("dat123", async() => {
    const {data} = await apiClient.get('http://localhost:3000/data');
    console.log(data);
    return data;
  });

  return (
    <div className={style.main}>
      <h3 align="center">Новые вакансии</h3>
      <div className={style.vacancies}>
        {isLoading && <div><MyLoader/></div>}
        {(isSuccess && data) &&
          data.map((el, idx) => {return (<Vacancy el={el} key={idx}/>)})
        }
      </div>
    </div>
  );
}

export default Main;