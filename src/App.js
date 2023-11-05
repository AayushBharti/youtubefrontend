import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import HomePage from './components/HomePage';

function App() {
  return (
    // <div className="App">Hello
    // <TableComponent></TableComponent>
    // <TableComponent></TableComponent>
    // <TableComponent></TableComponent>
    // <TableComponent></TableComponent>
    // </div>

    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {/* <Route path='/video' element={<VideoPage/>}></Route> */}
        {/* <Route path='/helo' element={<SomeComponent/>}></Route>
        <Route path='/hook' element={<HookComponent/>}></Route>
        <Route path='/timeBomb' element={<TimeBomb/>}></Route> */}
      </Routes>

    </BrowserRouter>

  );
}

export default App;
