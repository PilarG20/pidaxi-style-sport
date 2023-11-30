import { CabeceraLand } from "../../containers/landscape/cabeceraLand";
import usta from "../../../assets/images/usta.png";
import diferencia from "../../../assets/images/gym3.jpg";
import innovacion from "../../../assets/images/ulllllllllllllllllll.jpg";
import { url } from "inspector";
import LOGIWIS from "../../../assets/images/fondo.png.png";
import ultima from "../../../assets/images/couple-jogging-and-running-outdoors-in-park-near-the-water-young-bearded-man-and-woman-exercising-together-in-morning-scaled-650x450.jpg"
import mujer from "../../../assets/images/WhatsApp Image 2023-11-24 at 8.29.57 PM.jpeg";

import pareja from "../../../assets/images/pareja.png.jpeg";

export const InicioLand = () => {
    return (
        <div>
            <CabeceraLand></CabeceraLand>
            <div className="fondito">
                <div className="d-flex justify-content-center">
                    <img width="1000" height="600" src={LOGIWIS} role="img"></img>
                </div>
            </div>
             <div className="d-flex justify-content-center mt-5">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active ">
                         <img src={mujer} className="d-block  w-100" alt="..." height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={ultima} className="d-block cneter w-100" alt="..." height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={pareja} className="d-block center w-100" alt="..." height={500}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>

            <div className="d-flex justify-content-center text-dark m-5">
                <strong><h1>ASPECTOS A DESTACAR</h1></strong>
            </div>

            <div className="d-flex justify-content-center">
                <div className="container me-md-2">
                    <div className="row">
                        <div className="col-4">
                            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={usta} role="img" aria-label="Placeholder"></img>
                            <h2 className="fw-normal">CALIDAD</h2>
                        </div>
                        <div className="col-4">
                            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={diferencia} role="img" aria-label="Placeholder"></img>
                            <h2 className="fw-normal">INNOVACION</h2>
                        </div>
                        <div className="col-4">
                            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={innovacion} role="img" aria-label="Placeholder"></img>
                            <h2 className="fw-normal">DIFERENCIA</h2>
                        </div>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-center">
                <div className="container mt-5">
                    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                        <div className="d-flex justify-content-center">
                            <h1 className="fst-italic">Te invito a visitar estas redes sociales</h1>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <div className="col-3 me-1">
                                <a className="btn btn-primary" href="https://www.instagram.com/pilar20guzman/" role="button">INSTAGRAM PIDAXI</a>
                            </div>
                            <div className="col-3">
                                <a className="btn btn-primary" href="https://www.tiktok.com/@tuigcloset_" role="button">TIKTOK-LICRAS</a>
                            </div>
                            <div className="col-3">
                                <a className="btn btn-primary" href="https://www.youtube.com/@FitnessbyVivi" role="button">EJERCICIOS EN CASA</a>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};