import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para el admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
