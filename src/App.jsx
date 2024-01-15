import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './containers/Header/Header'
import Home from './pages/Home'
import Agents from './pages/Agents'

function App() {

  return (
    <Router>
      <Header/>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/Agents" element={<Agents/>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
