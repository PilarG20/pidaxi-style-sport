import { UrlsAPI } from "../utilities/domains/urls";

export class ServicioAcceso {
    public static async iniciarSesion(objAcceso: any){
        const peticion = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(objAcceso)
        }

        const urlConexion = UrlsAPI.URL_BASE2 + UrlsAPI.URL_SESION;

        const respuesta = fetch(urlConexion, peticion)
        .then((respuesta) => respuesta.json())
        .then((datos) => {return datos})
        .then(data => console.log(data))
        .catch((miErrrosito) => {return miErrrosito});

        return respuesta;
        }        
};