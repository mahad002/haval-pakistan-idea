import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { routes } from './constants/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Vehicle Routes */}
          {routes.vehicles.map((brand) => 
            brand.models.map((model) => (
              <Route
                key={model.path}
                path={model.path}
                element={
                  <React.Suspense fallback={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                    </div>
                  }>
                    <model.component />
                  </React.Suspense>
                }
              />
            ))
          )}
          
          {/* Service Routes */}
          {routes.services.map((service) => (
            <Route
              key={service.path}
              path={service.path}
              element={
                <React.Suspense fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                  </div>
                }>
                  <service.component />
                </React.Suspense>
              }
            />
          ))}
          
          {/* Information Routes */}
          {routes.info.map((info) => (
            <Route
              key={info.path}
              path={info.path}
              element={
                <React.Suspense fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                  </div>
                }>
                  <info.component />
                </React.Suspense>
              }
            />
          ))}
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
