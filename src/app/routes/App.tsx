import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { InicioLand } from "../components/public/Carousel";
import { AcercaDe } from "../components/public/acercaDe";
import { CiudadesLand } from "../components/public/ciudadesLand";
import { Sesion } from "../components/public/sesion";
import { Registro } from "../components/public/registro";
import { ErrorLand } from "../components/public/errorLand";
import { DepartamentosLand } from "../components/public/departamentoLand";
import { RegionesLand } from "../components/public/regionesLand";

const LazyInicio = lazy(()=> import('../components/public/Carousel').then(() => ({default: InicioLand})));
const LazyAcercaDe = lazy(()=> import('../components/public/acercaDe').then(() => ({default: AcercaDe})));
const LazyCiudades = lazy(()=> import('../components/public/ciudadesLand').then(() => ({default: CiudadesLand})));
const LazyDepartamentos = lazy(()=> import('../components/public/departamentoLand').then(() => ({default: DepartamentosLand})));
const LazyRegiones = lazy(()=> import('../components/public/regionesLand').then(() => ({default: RegionesLand})));
const LazySesion = lazy(()=> import('../components/public/sesion').then(() => ({default: Sesion})));
const LazyRegistro = lazy(()=> import('../components/public/registro').then(() => ({default: Registro})));
const LazyError = lazy(()=> import('../components/public/errorLand').then(() => ({default: ErrorLand})));

export const RuteoPrincipal = () => {
    return(
        <Routes>
            <Route path="/" element={<LazyInicio/>}/>
            <Route path="/aboutMe" element={<LazyAcercaDe/>}/>
            <Route path="/cities" element={<LazyCiudades/>}/>            
            <Route path="/depart" element={<LazyDepartamentos/>}/>
            <Route path="/regions" element={<LazyRegiones/>}/>
            <Route path="/login" element={<LazySesion/>}/>
            <Route path="/register" element={<LazyRegistro/>}/>            
            <Route path="*" element={<LazyError/>}/>
        </Routes>
    );
}