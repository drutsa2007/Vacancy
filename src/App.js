import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import Main from './components/Views/Main';
import Error404 from './components/Errors/Error404/Error404';
import VacancyView from './components/Views/VacancyView';
import Search from './components/Views/Search';
import Header from './components/Layouts/Header/Header';


const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <BrowserRouter>
          <Header/> 
          <Routes>
            <Route path="/" element={<Main />}/>
            {/*<Route path="/stack/:stack" element={<Stack />}/>*/}
            <Route path="/search" element={<Search />}/>
            <Route path="/search/:type" element={<Search />}/>
            <Route path="/vacancy/:id" element={<VacancyView />}/>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
