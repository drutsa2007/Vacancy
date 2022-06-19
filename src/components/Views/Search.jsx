import style from './Search.module.css';
import Filter from '../Filter/Filter';
import VacancySearch from '../Views/VacancySearch'

const Search = () => {
  return (
    <div className={style.search}>
        <Filter/>
        <div>
          <h3>Результаты поиска: 3256 вакансий.</h3>
          
          <div className={style.vacancies}>
            <VacancySearch/>
            <VacancySearch/>
            <VacancySearch/>
            <VacancySearch/>
            <VacancySearch/>
            <VacancySearch/>
          </div>
        </div>
    </div>
  );
}

export default Search;