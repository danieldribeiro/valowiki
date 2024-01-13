import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header/Header'
import Home from './pages/Home'
import Agents from './pages/Agents'

function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Agents" element={<Agents/>} />
        </Routes>
    </Router>
  );
}

export default App;
