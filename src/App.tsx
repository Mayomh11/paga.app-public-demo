import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import Demo from './components/Demo';
import LegalNoticeModal from './components/LegalNoticeModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <LegalNoticeModal />
    </>
  );
}

export default App;