
import Registration from './components/Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login  from './components/Login';
import Addexpense from './components/Addexpense';
import Viewexpense from './components/Viewexpense';
import Updateexpense from './components/Updateexpense';
import Displaymap from './components/Displaymap';
import Common from './components/Common';

function App() {

return (
  <BrowserRouter>
  <Routes>
  
  <Route path='/login' element={<Login/>}/>
  <Route path='/registration' element={<Registration/>}/>
  <Route path='/' element={<Common/>}>

     <Route path='addexpense' element={<Addexpense/>}/>
     <Route path='viewexpense' element={<Viewexpense/>}/>
     <Route path='updateexpense/:id' element={<Updateexpense/>}/>
     <Route path='display' element={<Displaymap/>}/>

  </Route>
</Routes>
</BrowserRouter>  
  );
}

export default App;
