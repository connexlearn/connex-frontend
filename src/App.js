import './App.css';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/footer/footer';

function App() {
  return (
  <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='' element={ <Home/>} ></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

  </>
  );
}

export default App;
