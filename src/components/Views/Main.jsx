import style from './Main.module.css';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import SiteCaption from '../SiteCaption/SiteCaption';
import Vacancy from './Vacancy';
import Counter from '../../store/Counter';



const Main = () => {
  return (
    <div>
      <Header/>
      <SiteCaption/>
      <h3 align="center">Новые вакансии</h3>
      <div className={style.vacancies}>
        <Vacancy/>
        <Vacancy/>
        <Vacancy/>
        <Vacancy/>
        <Vacancy/>
        <Vacancy/>
      </div>
      {/*<Counter/>*/}
    </div>
  );
}

export default Main;