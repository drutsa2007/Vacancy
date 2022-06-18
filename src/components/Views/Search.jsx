import style from './Search.module.css';
import Filter from '../Filter/Filter';

const Search = () => {
  return (
    <div>
        <h3>Результаты поиска: </h3>
        Найдено: 3256 вакансий
        <Filter/>
    </div>
  );
}

export default Search;