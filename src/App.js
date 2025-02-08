import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import AdminHome from './Pages/AdminHome';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Add from './Pages/Add';
import Employee from './Pages/Employee';
import Pnf from './Pages/Pnf';
import View from './Pages/View';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<AdminHome></AdminHome>}></Route>
        <Route path='/add-new' element={<Add></Add>}></Route>
        <Route path='/employee-manage' element={<Employee></Employee>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
