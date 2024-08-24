import React from "react";
import { Route, Routes } from "react-router-dom";
import MyContext from "../components/MyContext";
import HomePage from "./Home";
import Features from '../components/Features'
import NotFound from "./Page404";
import regionals from "../components/regionais";
import RegionalDetalhes from "../components/Regional/RegionalDetalhes";

export default function RoutesPages() {
    return (
        <MyContext.Provider value={regionals}>
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/regionais' element={<Features />} />
                <Route path='/regionais/:id' element={<RegionalDetalhes />} /> {/* Rota para detalhes com ID */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </MyContext.Provider>
    )
}