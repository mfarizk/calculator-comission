// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import JobForm from './components/JobForm';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="App">
//         <h1>Commission Calculator</h1>
//         <JobForm />
//         {/* <Dashboard /> */}
//     </div>
// );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Commission Calculator</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/calculator">Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/calculator" element={<Calculator />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        {/* <Route path="/" element={<Calculator />} /> */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
