import style from './Search.module.css';
import Filter from '../Filter/Filter';
import VacancySearch from '../Views/VacancySearch';
import {useQuery} from "react-query";
import apiClient from "../../addons/apiClient";

const Search = () => {
  const { isLoading, isSuccess, data } = useQuery("dat123", async() => {
    const {data} = await apiClient.get('http://localhost:3000/data');
    return data;
  });

  return (
    <div className={style.search}>
        <Filter/>
        {isLoading && <div>Загрузка</div>}
        {isSuccess &&
          <div>
            <h3>Результаты поиска: {data.length} вакансий.</h3>
            <div className={style.vacancies}>
              {data.map((el, idx) => <VacancySearch el={el} key={idx}/>)}
            </div>
          </div>
        }
    </div>
  );
}

export default Search;