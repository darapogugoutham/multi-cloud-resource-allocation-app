import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Dashboard from './components/Dashboard';
import ResourceAllocator from './components/ResourceAllocator';
import PerformanceMetrics from './components/PerformanceMetrics';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/allocate" component={ResourceAllocator} />
        <Route path="/metrics" component={PerformanceMetrics} />
      </Switch>
    </Router>
  );
};

export default App;