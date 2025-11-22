import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Catalog from './pages/Catalog';
import AITraining from './pages/AITraining';
import AIAssistant from './pages/AIAssistant';
import ContentStudio from './pages/ContentStudio';
import Insights from './pages/Insights';
import Automations from './pages/Automations';
import Messages from './pages/Messages';
import Marketplace from './pages/Marketplace';
import Billing from './pages/Billing';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="ai-training" element={<AITraining />} />
            <Route path="ai-assistant" element={<AIAssistant />} />
            <Route path="content-studio" element={<ContentStudio />} />
            <Route path="insights" element={<Insights />} />
            <Route path="automations" element={<Automations />} />
            <Route path="messages" element={<Messages />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="billing" element={<Billing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<HelpCenter />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
