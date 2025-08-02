import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import Demo from './components/Demo';
import LegalNoticeModal from './components/LegalNoticeModal';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <LegalNoticeModal />
    </>
  );
}

export default App;