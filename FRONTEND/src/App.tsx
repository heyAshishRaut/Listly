import FullScreenClock01 from "./components/FullScreenClock01";
import FullScreenClock02 from "./components/FullScreenClock02";
import FullScreenClock03 from "./components/FullScreenClock03";
import Showcase from "./components/Showcase";
import Main from "./components/Main";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Showcase />}></Route>
                <Route path="/dashboard" element={<Main />}></Route>
                <Route path="/clockgrad" element={<FullScreenClock03 />}></Route>
                <Route path="/dark" element={<FullScreenClock01 />}></Route>
                <Route path="/light" element={<FullScreenClock02 />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
