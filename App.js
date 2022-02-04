
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
import About from './About';
import User from './User';
import Match from './Match';
import Comp from './Comp';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/User" element={<User/>}></Route> {// here name is a parameter}
  }
          <Route exact path="/Match/:userName" element={<Match />}></Route>
    </Routes>
    </BrowserRouter>
    <Comp/>
   
    </div>
  );
}

export default App;
