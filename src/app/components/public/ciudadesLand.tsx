import { useEffect, useState } from "react";
import muj from "../../../assets/images/gym.jpg"
import muj2 from "../../../assets/images/gym2.jpg"
import muj3 from "../../../assets/images/amigaaaaaaaas.jpg"
import grandes from "../../../assets/images/tallas grandes.jpg"
import talla from "../../../assets/images/tallas.png"
import top from "../../../assets/images/top.jpeg"
import falduqui from "../../../assets/images/falda.jpg"
import licrita from "../../../assets/images/licraa.jpg"
import tres from "../../../assets/images/treeeeeees.jpeg"
import foto1 from "../../../assets/images/WhatsApp Image 2023-11-30 at 1.41.53 AM (1).jpeg"
import foto2 from "../../../assets/images/WhatsApp Image 2023-11-30 at 1.41.50 AM.jpeg"
import foto3 from "../../../assets/images/WhatsApp Image 2023-11-30 at 1.41.52 AM.jpeg"
import foto4 from "../../../assets/images/WhatsApp Image 2023-11-30 at 1.41.54 AM (1).jpeg"
import foto5 from "../../../assets/images/WhatsApp Image 2023-11-30 at 1.41.53 AM (2).jpeg"
import foto6 from "../../../assets/images/WhatsApp Image 2023-11-30 at 1.41.53 AM.jpeg"
import foto7 from "../../../assets/images/foto5.jpeg"
import foto8 from "../../../assets/images/foto7.jpeg"
import foto9 from "../../../assets/images/foto6.jpeg"
export const CiudadesLand = () => {

 
  return (
    <>
      <div >
        <div>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand text-black mb-50" href="#">
                MUJERES
              </a>
            </div>
          </nav>
        </div>

        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={muj} className="d-block w-100" alt="..." height={500} />
            </div>
            <div className="carousel-item">
              <img src={muj2} className="d-block w-100" alt="..." height={500} />
            </div>
            <div className="carousel-item">
              <img src={muj3} className="d-block w-100" alt="..." height={500} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container-fluid w-100 m-2">
          <div className="row featurette mt-5">
            <div className="col-md-6 m-5 form-check">
              <br />
              <br />
              <br />
              <br />
              <h1 className="featurette-heading display-4 fst text-black">AVERIGUA TU TALLA</h1>
              <h2 className="text-black mb-5">TALLAS EN LICRA Y SHORT</h2>
              <p className="text-black">Asi puedes ver que talla eres más facilmente</p>
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
                      <img src={talla} className="d-block w-100" alt="..." height={350} />
                    </div>
                    <div className="carousel-item">
                      <img src={top} className="d-block w-100" alt="..." height={350} />
                    </div>
                    <div className="carousel-item">
                      <img src={grandes} className="d-block w-100" alt="..." height={350} />
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
        <div>
          <img src={falduqui} className="rounded float-start" alt="..." height={500} />
       
          <img src={licrita} className="rounded float-end" alt="..." height={500}/>

          <img src={tres} className="rounded mx-auto d-block" alt="..."  height={500}></img>
        </div>
        <div>
        <img src={foto1} className="rounded float-start" alt="..." height={500} />
       
       <img src={foto2} className="rounded float-end" alt="..." height={500}/>

       <img src={foto3} className="rounded mx-auto d-block" alt="..."  height={500}></img>
        </div>
        <div>
        <img src={foto4} className="rounded float-start" alt="..." height={500} />
       
       <img src={foto5} className="rounded float-end" alt="..." height={500}/>

       <img src={foto6} className="rounded mx-auto d-block" alt="..."  height={500}></img>

        </div>

        <div>
        <img src={foto7} className="rounded float-start" alt="..." height={500} />
       
       <img src={foto8} className="rounded float-end" alt="..." height={500}/>

       <img src={foto9} className="rounded mx-auto d-block" alt="..."  height={500}></img>

        </div>
      </div>


    </>

  );
}