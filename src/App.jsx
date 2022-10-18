import React from 'react';
import './App.css';
import ClassComp from './Components/ClassFunc';
import { Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Bootstrap from './Components/Bootstrap';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="BScomp" element={<Bootstrap/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
