import Login from './modules/auth/Login'
import ListView from './modules/mydisbursements/ListView'
import Screen from './components/screen/Screen'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/pbt'} element={<Login/>} />
        <Route path={'/pbt/login'} element={<Login/>} />
        <Route path={'/pbt/misdesembolsos'} element={<Screen><ListView/></Screen>} />
      </Routes>
    </Router>
  );
}

export default App;
