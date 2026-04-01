import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersonaProvider } from './context/PersonaContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import CommandCenter from './pages/CommandCenter';
import TeamDetail from './pages/TeamDetail';
import Conversations from './pages/Conversations';
import ArtifactsPage from './pages/Artifacts';
import AutomationsPage from './pages/Automations';
import IMessage from './pages/IMessage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  return (
    <ThemeProvider>
      <PersonaProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CommandCenter />} />
              <Route path="team/:teamId" element={<TeamDetail />} />
              <Route path="conversations" element={<Conversations />} />
              <Route path="artifacts" element={<ArtifactsPage />} />
              <Route path="automations" element={<AutomationsPage />} />
              <Route path="imessage" element={<IMessage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersonaProvider>
    </ThemeProvider>
  );
}
