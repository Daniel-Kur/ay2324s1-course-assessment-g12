import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage'
import QuestionPage from './pages/QuestionPage';
import UserProfilePage from './pages/UserProfilePage';
import Layout from './pages/Layout';
import CollaborationPage from './pages/CollaborationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout> <QuestionPage /> </Layout>} />
          <Route path ="/LoginPage" element={<LoginPage />} />
          <Route path="/UserProfile" element={<Layout><UserProfilePage /> </Layout>} /> */ /* if want to add extra page  just copy and change the path
          <Route path="/CollaborationPage" element={<Layout><CollaborationPage /> </Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
