import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import Layout from './components/layout/Layout';
import PastAttendancePage from './pages/pastAttendancePage';
import ChangePasswordPage from './pages/changePasswordPage';
import UserDashboardPage from './pages/userDashboardPage';
import AdminDashboardPage from './pages/adminDashboardPage';
import AdminDashboardUsersPage from './pages/adminDashboardUsersPage';
import AdminuserProfilePage from './pages/adminuserProfilePage';
import AdminDashboardSettingspage from './pages/adminDashboardSettingspage';

const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-attendance" element={<PastAttendancePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/user-dashboard" element={<UserDashboardPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route
          path="/admin-dashboard/users"
          element={<AdminDashboardUsersPage />}
        />
        <Route
          path="/admin-dashboard/users/:id"
          element={<AdminuserProfilePage />}
        />
        <Route
          path="/admin-dashboard/settings"
          element={<AdminDashboardSettingspage />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
