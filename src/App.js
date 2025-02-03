import React, { Suspense, lazy, useState, useEffect } from 'react';
import { FaDiscord } from 'react-icons/fa';
import './App.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

function LoadingCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev < 100 ? prev + 1 : prev);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return <div className="loading">{count}%</div>;
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="button-group">
          <a href="https://x.com/AlphaMonkes" target="_blank" rel="noopener noreferrer" className="social-btn">
            <span className="x-logo">𝕏</span>
          </a>
          <a href="https://discord.gg/alphamonkes" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaDiscord />
          </a>
        </div>
      </header>
      <main className="main-content">
        <Suspense fallback={<LoadingCounter />}>
          <Spline scene="https://prod.spline.design/P1HOEcguURJfCTiY/scene.splinecode" />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
