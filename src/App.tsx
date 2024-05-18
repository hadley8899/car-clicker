import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';
import ThemeSwitch from './ThemeSwitch';

function App() {
    return (
        <div className="container-fluid">
            <header className="d-flex justify-content-between py-3 mb-2">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
                <ThemeSwitch/>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
