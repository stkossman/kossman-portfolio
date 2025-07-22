import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import {Home} from './pages/Home'
import {PageNotFound} from './pages/404Page'

function App() {

    return (
        <Router>
            <div className="w-screen h-screen relative overflow-hidden">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
