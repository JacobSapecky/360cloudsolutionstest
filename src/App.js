
import MainPage from './Pages/MainPage';
import Invoice from './Components/Invoice';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/invoice" element={<Invoice/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
