import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import AdminPanel from "./pages/admin-panel/AdminPanel";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin/*" element={<AdminPanel />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
