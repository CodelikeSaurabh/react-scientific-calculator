/**
 * Enhanced App.js with custom footer
 * @author Saurabh Kashyap
 * @version 2.0.0
 */

import React from 'react';
import ScientificCalculator from './components/Calculator';
import './App.css';

/**
 * Main App Component with enhanced layout
 */
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1 className="app-title">
          Scientific Calculator
        </h1>
        <p className="app-subtitle">
          Advanced mathematical calculations with modern design
        </p>
      </header>

      {/* Main Calculator Component */}
      <main className="App-main">
        <ScientificCalculator />
      </main>

      {/* Custom Footer */}
      <footer className="App-footer">
        <div className="footer-content">
          <p className="footer-text">
            Made with ❤️ by <span className="author-name">Saurabh</span>
          </p>
          <p className="footer-subtext">
            Built with React.js • Modern UI Design
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;