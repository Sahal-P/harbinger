import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import LoginUser from './routes/LoginUser';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userLogin' element={<LoginUser/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
