import Profile from './Profile';
import NoPage from './NoPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CreateProfile from './CreateProfile';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="create_profile" element={<CreateProfile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;