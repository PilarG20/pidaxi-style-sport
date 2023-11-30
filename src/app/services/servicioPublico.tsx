import { UrlsAPI } from "../utilities/domains/urls";

class ServicioPublico {
    public static async obtenerRegiones(){
        const peticion = {
            method: "GET",
            headers:{'Content-type':'application/json; charset=UTF-8'}
        };

        const urlConexion = UrlsAPI.URL_BASE+UrlsAPI.URL_REGIONES;

        const respuesta = fetch(urlConexion,peticion)
        .then((objRespuesta) => objRespuesta.json())        
        .then((datos) => {return datos})
        .catch((miErrorsito) => {return miErrorsito});

        return respuesta;
    }


    public static async obtenerDepas(){
        const peticion = {
            method: "GET",
            headers:{'Content-type':'application/json; charset=UTF-8'}
        };

        const urlConexion = UrlsAPI.URL_BASE+UrlsAPI.URL_DEPARTAMENTOS;

        const respuesta = fetch(urlConexion,peticion)
        .then((objRespuesta) => objRespuesta.json())        
        .then((datos) => {return datos})
        .catch((miErrorsito) => {return miErrorsito});

        return respuesta;
    }

    public static async obtenerCiudades(){
        const peticion = {
            method: "GET",
            headers:{'Content-type':'application/json; charset=UTF-8'}
        };

        const urlConexion = UrlsAPI.URL_BASE+UrlsAPI.URL_CIUDADES;

        const respuesta = fetch(urlConexion,peticion)
        .then((objRespuesta) => objRespuesta.json())        
        .then((datos) => {return datos})
        .catch((miErrorsito) => {return miErrorsito});

        return respuesta;
    }
}

export default ServicioPublico;
