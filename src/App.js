import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Headers/Sidebar';
import Dashboard from './Pages/Dashboard';
import './App.css';
import Support from './Pages/Support';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
