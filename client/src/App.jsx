import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TaskFormPage';
import { ProfilePage } from './pages/ProfilePage';
import { HomePage } from './pages/HomePage';

import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter> 
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              {/* Solo para usuarios autenticados */}
              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/add-task' element={<TaskFormPage />} />
                <Route path='/task/:id' element={<TaskFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
