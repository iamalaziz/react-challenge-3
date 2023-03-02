import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EasyScreen from './pages/EasyScreen';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/easy" element={<EasyScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
