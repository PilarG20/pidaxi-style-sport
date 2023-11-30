import { CabeceraLand } from "../../containers/landscape/cabeceraLand";


import efecto from "../../../assets/images/efecto.png";
import short from "../../../assets/images/WhatsApp Image 2023-11-29 at 9.14.16 PM.jpeg";
import chicas from "../../../assets/images/WhatsApp Image 2023-11-24 at 8.29.57 PM.jpeg";
import licras from "../../../assets/images/WhatsApp Image 2023-11-29 at 9.36.27 PM.jpeg";
import logi from "../../../assets/images/logo.png.png";
import yo from "../../../assets/images/WhatsApp Image 2023-11-29 at 9.59.08 PM.jpeg";


export const AcercaDe = () => {
    return (
        <div className="bg-success-subtle">
            <CabeceraLand></CabeceraLand>
            <div>
                <div className="fonfon">
                    <br />
                    <div className="d-flex m-5 mb-1 d-flex justify-content-center">
                        <h1 className="featurette-heading display-4 fst text-white">ACERCA DE PIDAXI-STYLE-SPORT</h1>
                    </div>

                    <div className="contaier">                        
                            <div className="d-flex justify-content-center">
                                <div className="col-md-7 h-100 mt-5 border bg-light text-bg-light">
                                    <h2 className="m-5 mb-2">ROPA DEPORTIVA</h2>                                    
                                    <br />
                                    <div className="container">
                                        <p className="text-start m-5 mt-2 text-black">
                                            Mi nombre es Pilar Guzmán, soy estudiante de cuarto semestre en la carrera de Ingeniería de Sistemas en la universidad Santo Tomás seccional Tunja.
                                            Esta Página de ropa deportiva nace debido a la creciente demanda de los productos deportivos de alta calidad, se busca ofrecer modelos de ropa deportiva innovadores y de gran comodidad.
                                        </p>                                                                              
                                    </div>                                    
                                </div>
                            </div>
                        
                    </div>
                    <br />
                    <br />
                </div>


                <div className="container-fluid w-100 m-2">
                    <div className="row featurette mt-5">
                        <div className="col-md-6 m-5 form-check">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="featurette-heading display-4 fst text-black">Licras con nuevo diseño</h1>
                            <h2 className="text-black mb-5">EFECTO PUSH UP</h2>
                            <p className="text-black">Los leggings o shorts push up ayudan a crear un efecto de nalgas mas elevadas al mismo tiempo que estiliza las piernas. Son muy versátiles, se pueden crear multitud de outfits para crear diferentes look sport para diferentes ocaciones. </p>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center mt-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={efecto} className="d-block w-100" alt="..." height={350} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={short} className="d-block w-100" alt="..." height={350} />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={chicas} className="d-block w-100" alt="..." height={350} />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid w-100 m-2">

                    <div className="row featurette">
                        <div className="col-md-5">
                            <div className="d-flex justify-content-center mt-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={licras} className="d-block w-100" alt="..." height={350} />
                                        </div>
                                       
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="featurette-heading display-4 fst text-black">PARA HOMBRE</h1>
                            <h2 className="text-black mb-5">LICRAS-PANTALONETAS-CAMISETAS LICRADAS-SUELTAS Y MUCHO MAS!!</h2>
                            <p className="text-black">La ropa deportiva en los hombres es crucial para optimizar el rendimiento físico y brindar comodidad durante la actividad física o cualquier otra actividad.</p>
                        </div>
                    </div>

                </div>

                <div className="container-fluid w-100 m-2">
                    <div className="row featurette mt-5">
                        <div className="col-md-6 m-5 form-check">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="featurette-heading display-4 fst text-black">Estilo único e innovador</h1>
                            <h2 className="text-black mb-5">¿Por qué Comprar ropa deportiva innovadora?</h2>
                            <p className="text-black">La compra de ropa deportiva innovadora para hombres y mujeres es esencial, ya que proporciona prendas diseñadas con tecnología avanzada, comodidad y estilo, mejorando así el rendimiento atlético y promoviendo un enfoque moderno y activo para ambos géneros. </p>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center mt-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={logi} className="d-block w-100" alt="..." height={350} />
                                        </div>
                                        
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid w-100 m-2">

                    <div className="row featurette">
                        <div className="col-md-5">
                            <div className="d-flex justify-content-center mt-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={yo} className="d-block w-100" alt="..." height={350} />
                                        </div>
                                       
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="featurette-heading display-4 fst text-black">Creadora de la Página</h1>
                            <h2 className="text-black mb-5">Fan de la ropa deportiva</h2>
                            <p className="text-black">Explora nuestra página innovadora, donde la moda deportiva se encuentra con la vanguardia. Descubre la fusión perfecta entre estilo y rendimiento.Redefine tu experiencia de vestir para destacar en cada movimiento </p>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
}