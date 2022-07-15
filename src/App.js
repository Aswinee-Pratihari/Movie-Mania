// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import video from "./marvel.mp4"
import Navbar from './components/Navbar';
import Hero from './Pages/Hero';
import GenreWiseList from './Pages/GenreWiseList';
import MovieDetail from './Pages/MovieDetail';
import ActorWork from './Pages/ActorWork';
function App() {
  return (
  <>

<BrowserRouter>

   <Navbar/>
   <Routes>
      <Route path="/" element={ <Hero/>} />
      <Route path='/movies/:id' element={<MovieDetail/>}/>
      <Route path='/credit/:id' element={<ActorWork/>}/>
  {/* <GenreWiseList/> */}
      </Routes>
 
</BrowserRouter>

  </>

    // "sss"
  );
}

export default App;
