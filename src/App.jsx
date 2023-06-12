import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import CompagnieDetail from './Pages/Dashboard/CompagnieDetail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/:id/:results" element={<CompagnieDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App