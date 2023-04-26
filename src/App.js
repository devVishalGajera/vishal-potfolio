import {Home, Work, About} from "./components";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import "./assets/font/Dancing_Script/dancing_script.css";
import "./assets/font/Josefin_Sans/Josefin_Sans.css";
import Contact from "./components/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className='h-100 w-100'>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/work`} element={<Work/>}/>
                    <Route path={`/about-me`} element={<About/>}/>
                    <Route path={`/contact-me`} element={<Contact/>}/>
                    <Route path={`*`} element={<Navigate to='/' />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
