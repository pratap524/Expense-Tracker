import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LegacyPage from "./LegacyPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import SpendingReportPage from "./SpendingReportPage";
import { isAuthenticated } from "./auth/session";
import { legacyPages } from "./legacyPages";

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function PublicOnlyRoute({ children }) {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard-3" replace />;
  }

  return children;
}

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
        <Route path="/" element={<Navigate to={isAuthenticated() ? "/dashboard-3" : "/login"} replace />} />
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <LoginPage />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicOnlyRoute>
              <SignupPage />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/spending-report"
          element={
            <ProtectedRoute>
              <SpendingReportPage />
            </ProtectedRoute>
          }
        />
        {Object.entries(legacyPages).map(([path, page]) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute>
                <LegacyPage title={page.title} html={page.html} />
              </ProtectedRoute>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
