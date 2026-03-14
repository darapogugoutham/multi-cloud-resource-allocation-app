import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Dashboard from './components/Dashboard';
import ResourceAllocator from './components/ResourceAllocator';
import PerformanceMetrics from './components/PerformanceMetrics';
import './styles/App.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">☁️ CloudManager</Link>
        <ul className="navbar-links">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link></li>
          <li><Link to="/analytics" className={isActive('/analytics')}>Analytics</Link></li>
          <li><Link to="/allocate" className={isActive('/allocate')}>Allocate</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/allocate" component={ResourceAllocator} />
          <Route path="/metrics" component={PerformanceMetrics} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;