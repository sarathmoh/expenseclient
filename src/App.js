
import Registration from './components/Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login  from './components/Login';
import Addexpense from './components/Addexpense';
import Updateexpense from './components/Updateexpense';
import Displaymap from './components/Displaymap';
import Common from './components/Common';
import Error from './components/Error';

function App() {

return (
  <BrowserRouter>
  <Routes>
  
  <Route path='/login' element={<Login/>}/>
  <Route path='/registration' element={<Registration/>}/>
  <Route path='/' element={<Common/>}>

     <Route index element={<Addexpense/>}/>
     <Route path='updateexpense/:id' element={<Updateexpense/>}/>
     <Route path='display' element={<Displaymap/>}/>

  </Route>
  <Route path='*' element={<Error/>}/>
</Routes>
</BrowserRouter>  
  );
}

export default App;
