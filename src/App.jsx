import Login from './place/auth/Login'
import Header from './components/header/Header'
import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Provider from './provider/Provider'
import CreateUser from './place/users/CreateUser'
import User from './place/users/User'
import ProtectedRoute from './services/ProtectedRoute'
import HelperBadRoute from './helpers/HelperBadRoute'

function App() {
  return (
    <Router>
      <Provider>
        <Routes>
          <Route path={'/pt'} element={<Navigate to ='login/' />} />
          <Route path={'/pt/login'} element={<Login/>} />
          <Route path={'/pt/usuarios'} element={
            <ProtectedRoute>
              <Header/> 
              <User/>
            </ProtectedRoute>
          } />
          <Route path={'/pt/ruta-invalida'} element={
            <ProtectedRoute>
              <Header/> 
              <HelperBadRoute/>
            </ProtectedRoute>
          } />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
