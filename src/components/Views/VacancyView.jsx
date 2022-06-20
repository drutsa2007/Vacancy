import style from './VacancyView.module.css';
import {useParams} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnglesRight, faLocationDot, faClock, faRotate} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useQuery} from "react-query";
import apiClient from "../../addons/apiClient";

const VacancyView = () => {
  const {id} = useParams()
  const { isLoading, isSuccess, data } = useQuery("dat123", async() => {
    const {data} = await apiClient.get('http://localhost:3000/data/'+id);
    return data;
  });
  return (
    <div>
		<div className={style.image}>
			<img src='/img/vacancy.jpg' alt="vacancy" align="center" width="280px"/>
		</div>
		{isLoading && <div>Загрузка</div>}
		{isSuccess &&
			<div className={style.vacancy}>
				<div className={style.vacancyDate}>
					Дата добавления: 23.09.2023
				</div>
				<div className={style.vacancyCaption}>
					{data.role}
				</div>
				<div className={style.vacancyLevel}>
					Junior | Junior+
				</div>
				<div className={style.vacancySide}>
					Fullstack (Front-end, Back-end)
				</div>
				<div className={style.vacancySalary}>
					от 100.000 до 200.000 ₽
				</div>
				<hr />
				<div className={style.vacancyCompany}>
					Компания: AGIMA (Финансы)
				</div>
				<div className={style.vacancyLocation}>
					<FontAwesomeIcon icon={faLocationDot} style={{marginRight: "4px"}}/>
					Россия, Саратов
				</div>
				<div className={style.vacancyPlace}>
					Работа в офисе (или Удаленная)
				</div>
				<div className={style.vacancyTime}>
					<FontAwesomeIcon icon={faClock} style={{marginRight: "4px"}}/>
					Полная занятость (Частичная, Почасовая)
				</div>
				<div className={style.vacancyRelocation}>
					<FontAwesomeIcon icon={faRotate} style={{marginRight: "4px"}}/>
					Релокация возможна
				</div>

				<hr />
				<div className={style.vacancyTasks}>
					<span className={style.step}>Задачи: </span>
					<ul type="none">
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> разрабатывать продуктовые API</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> разрабатывать новые приложения на React и поддерживать существующие</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> участвовать в кодревью</li>
					</ul>

				</div>
				<div className={style.vacancyNeeds}>
					<span className={style.step}>Требования: </span>
					<ul type="none">
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт работы в технической поддержке - 2 линия</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> желание развиваться, стремление к новым знаниям и изучению современных практик DevOps</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт настройки и администрирования компонентов микросервисной архитектуры (Docker, Kubernetes, Nginx, HAProxy, Kafka и т.д.)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт администрирования систем мониторинга и нотификации (ELK, Grafana, Prometheus, Alertmanager, Zabbix, Zipkin и т.д.)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт использования инструментов автоматизации (Bash, Python, Ansible, Terraform, Jenkins)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> имеете опыт кроссбраузерной / адаптивной верстки</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> можете сверстать одностраничный сайт из Figma</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> имеете опыт работы с SQL, NoSQL базами данных и key-value хранилищами</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> понимаете принципы работы HTTP и REST — писали unit / функциональные тесты и миграции для баз данных</li>
					</ul>
				</div>
				<div className={style.vacancyPluses}>
					<span className={style.step}>Будет плюсом:	</span>
					<ul type="none">
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт администрирования Linux (предпочтение RHEL, SLES)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт работы с облачными сервисами (предпочтение Яндекс.Облако)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт администрирования СУБД (MS SQL, Oracle, PostgreSQL, MongoDB, Vertica, ClickHouse)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт администрирования SonarQube</li>
					</ul>
				</div>
				<div className={style.vacancyOffers}>
					<span className={style.step}>Наши предложения:	</span>
					<ul type="none">
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт администрирования Linux (предпочтение RHEL, SLES)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт работы с облачными сервисами (предпочтение Яндекс.Облако)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт администрирования СУБД (MS SQL, Oracle, PostgreSQL, MongoDB, Vertica, ClickHouse)</li>
						<li><FontAwesomeIcon icon={faAnglesRight} style={{marginRight: "4px", fontSize: "11px", color: "#555555"}}/> опыт администрирования SonarQube</li>
					</ul>
				</div>

				<div className={style.vacancyStacks}>
				<span className={style.step}>Стек технологий: </span><br/>
					#TypeScript, #Node.js, #React, #PostgreSQL
				</div>
				<div className={style.vacancyButton}>
					<Link to="/vacancy/1"><button className={style.button}>Перейти</button></Link>
				</div>
			</div>
		}	
	</div>
  );
}

export default VacancyView;