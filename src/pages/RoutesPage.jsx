import React from "react";
import { Route, Routes } from "react-router-dom";
import MyContext from "../components/MyContext";
import HomePage from "./Home";
import Features from '../components/Features'
import NotFound from "./Page404";

export default function RoutesPages() {
    const test = 'car'

    return (
        <MyContext.Provider value={test}>
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/regionais' element={<Features />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </MyContext.Provider>
    )
}