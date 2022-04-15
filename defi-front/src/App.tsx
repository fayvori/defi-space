import './assets/css/App.css';
import './assets/css/App_crm.css'

import {Home} from "./pages/Home";
import {Invest} from "./pages/Invest";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/invest" element={<Invest/>}/>
            </Routes>
        </Router>
    );
}

export default App;
