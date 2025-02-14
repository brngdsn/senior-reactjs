import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import VirtualDomDemo from './components/VirtualDomDemo';
import HooksDemo from './components/HooksDemo';
import PerformanceDemo from './components/PerformanceDemo';
import FormDemo from './components/FormDemo';
import { ThemeProvider } from './components/ThemeContext';
import ThemedComponent from './components/ThemedComponent';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyComponent from './components/BuggyComponent';
import DataFetcher from './components/DataFetcher';

// Lazy load LazyComponent using React.lazy for code splitting.
const LazyComponent = React.lazy(() => import('./components/LazyComponent'));

const App = () => {
  // State for toggling the navbar on mobile devices.
  const [isNavActive, setIsNavActive] = useState(false);
  
  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <ThemeProvider>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item is-active" to="/">
            Senior ReactJS SPA
          </NavLink>
          <a
            role="button"
            className={`navbar-burger ${isNavActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarMenu" className={`navbar-menu ${isNavActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/virtual">
              Virtual DOM
            </NavLink>
            <NavLink className="navbar-item" to="/hooks">
              Hooks
            </NavLink>
            <NavLink className="navbar-item" to="/performance">
              Performance
            </NavLink>
            <NavLink className="navbar-item" to="/form">
              Forms
            </NavLink>
            <NavLink className="navbar-item" to="/theme">
              Theme
            </NavLink>
            <NavLink className="navbar-item" to="/error-boundary">
              Error Boundary
            </NavLink>
            <NavLink className="navbar-item" to="/lazy">
              Lazy Load
            </NavLink>
            <NavLink className="navbar-item" to="/data">
              Data Fetcher
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="container">
        <section className="section">
          <div className="container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/virtual" element={<VirtualDomDemo />} />
              <Route path="/hooks" element={<HooksDemo />} />
              <Route path="/performance" element={<PerformanceDemo />} />
              <Route path="/form" element={<FormDemo />} />
              <Route path="/theme" element={<ThemedComponent />} />
              <Route
                path="/error-boundary"
                element={
                  <ErrorBoundary>
                    <BuggyComponent />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/lazy"
                element={
                  <React.Suspense fallback={<div>Loading Lazy Component...</div>}>
                    <LazyComponent />
                  </React.Suspense>
                }
              />
              <Route path="/data" element={<DataFetcher />} />
            </Routes>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;