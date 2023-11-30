import { Link } from "react-router-dom";
import logo from "../../../assets/images/pidaxi-removebg-preview.png"

export const CabeceraLand = () => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <img src={logo} alt="no logo" />
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 lg-5">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/aboutMe">Nosotros</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/cities">Mujer</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/depart">Hombre</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/regions">Registro</Link>
                        </li>

                        

                    </ul>
                    <span className='navbar-text'>
                       
                        <Link to="/login" className='nav-link'>Iniciar Sesion</Link>
                        
                    </span>
                </div>
            </div>
        </nav>


    );
};