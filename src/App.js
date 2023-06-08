import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Headers/Sidebar';
import Dashboard from './Pages/Dashboard';
import './App.css';
import Support from './Pages/Support';
import DetailContent from './Pages/DetailContent';
import SupportContent from './Pages/SupportContent';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/detail/:id" element={<DetailContent  />} /> 
          <Route path="/supportdetail/:id" element={<SupportContent  />} /> 
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
