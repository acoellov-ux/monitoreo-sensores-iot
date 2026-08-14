import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Ubicaciones } from './pages/Ubicaciones';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ubicaciones />} />
        <Route path="/dashboard/:sensorId" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
