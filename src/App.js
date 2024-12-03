// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import QAPage from './pages/QAPage';
import EventPage from './pages/EventPage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route
          path="/"
          element={
            <Home isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          }
        />
        <Route
          path="/product1"
          element={
            <Product1
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          }
        />
        <Route
          path="/product2"
          element={
            <Product2
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          }
        />
        <Route
          path="/product3"
          element={
            <Product3
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          }
        />
        <Route
          path="/qa"
          element={
            <QAPage
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          }
        />
        <Route
          path="/events"
          element={
            <EventPage
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
