import React from "react";
import { Route, Routes } from "react-router-dom";
import MyContext from "../components/MyContext";
import HomePage from "./Home";
import Features from '../components/Features'
import NotFound from "./Page404";
import regionals from "../components/regionais";
import RegionalDetalhes from "../components/Regional/RegionalDetalhes";
import SetorDetalhes from "../components/Setor/SetorDetalhes";
import Setor from "../components/Setor/Setor";

export default function RoutesPages() {
    return (
        <MyContext.Provider value={regionals}>
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/regionais' element={<Features />} />
                <Route path='/regionais/:id' element={<RegionalDetalhes />} />
                <Route path='/setores/' element={<Setor />} />
                <Route path='/setores/:id' element={<SetorDetalhes />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </MyContext.Provider>
    )
}