import React from "react";
import { Route, Routes } from "react-router-dom";
import MyContext from "../components/MyContext";
import HomePage from "./Home";

export default function RoutesPages() {
    const test = 'car'

    return (
        <MyContext.Provider value={test}>
            <Routes>
                <Route path='/' element={<HomePage />} exact />
            </Routes>
        </MyContext.Provider>
    )
}