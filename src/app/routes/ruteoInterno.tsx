import { Suspense , lazy } from "react";
import { Bienvenida } from "../components/private/bienvenida";
import { ErrorInterno } from "../containers/dashboard/errorInterno";
import { Route, Routes } from "react-router-dom";

const LazyBienvenida = lazy(()=>import('../components/private/bienvenida').then(() => ({ default: Bienvenida})));
const LazyErrorInterno = lazy(()=>import('../containers/dashboard/errorInterno').then(() => ({ default: ErrorInterno})));

//cargar lazy
const cargando = (
    <div className='d-flex justify-content-center'>
      <div className='mt-3'>
        <button className='btn btn-primary' type='button' disabled></button>
        <span className='spinner-grow spinner-grow-sm' role='status'></span>
        Cargando...
      </div>
    </div>
  ) 

export const RuteoInterno = () => {
    return(
        <Suspense fallback={cargando}>
            <Routes>
                <Route path="/" element={<LazyBienvenida/>}></Route>
                <Route path="*" element={<LazyErrorInterno/>}></Route>
            </Routes>
        </Suspense>
    )
}