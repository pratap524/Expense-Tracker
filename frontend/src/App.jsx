import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { legacyPages } from "./legacyPages";

function App() {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsRouteLoading(true);
    const timer = setTimeout(() => {
      setIsRouteLoading(false);
    }, 550);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isRouteLoading ? (
        <div className="route-loader-overlay" role="status" aria-live="polite" aria-label="Loading next page">
          <div className="route-loader-card">
            <div className="route-loader-spinner" />
            <p className="route-loader-text">Loading workspace...</p>
          </div>
        </div>
      ) : null}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {Object.entries(legacyPages).map(([path, page]) => (
          <Route
            key={path}
            path={path}
            element={<LegacyPage title={page.title} html={page.html} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
