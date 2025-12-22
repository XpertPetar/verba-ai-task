//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import "./index.css";
import type { JSX } from "react";

function App(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path="/" element={<ChatPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
