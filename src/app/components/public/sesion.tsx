import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigation } from "react-router-dom";
import { useFormulario } from "../../utilities/myHoocks/useFormulario";
import { Acceso } from "../../models/acceso";
import jsSha512 from "jssha";
import { ServicioAcceso } from "../../services/servicioAcceso";
import { log } from "console";

export const Sesion = () => {

    /* const navegacion = useNavigation(); */
    type frmHtml = React.FormEvent<HTMLFormElement>;

    const[enProceso, setEnProceso] = useState<boolean>(false);

    let {correoAcceso, claveAcceso, dobleEnlace, objetito} = useFormulario<Acceso>(new Acceso(0,"",""));

    const enviarFormulario = async(formulario:frmHtml)=>{
        formulario.preventDefault();
        setEnProceso(true);

        const formularioHtml = formulario.currentTarget;

        if (formularioHtml.checkValidity()===false) {
            formulario.preventDefault();
            formulario.stopPropagation();
        } else {
            const sha512:jsSha512=new jsSha512('SHA-512', 'TEXT', {encoding:'UTF8'});
            const claveCifrada =sha512.update(claveAcceso).getHash('HEX');
            objetito.claveAcceso = claveCifrada;

            const respuesta = await ServicioAcceso.iniciarSesion(objetito);
            console.log(respuesta);
            
        }
    }

    return(
        <div className="mt-5">
            <div className="d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <span>Inicio de Sesion</span>
                        </div>
                        <div className="card-body">
                            <div className="m-2">
                                <Form noValidate onSubmit={enviarFormulario} validated={enProceso}>
                                    <Form.Group controlId="correoAcceso">
                                        <Form.Label>Correo Electronico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="correoAcceso"
                                            className="form-control"
                                            value={correoAcceso}
                                            onChange={dobleEnlace}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="claveAcceso">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="claveAcceso"
                                            className="form-control"
                                            value={claveAcceso}
                                            onChange={dobleEnlace}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="claveAcceso">
                                        <Form.Label>Confirmar Contraseña</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="claveAcceso"
                                            className="form-control"
                                            value={claveAcceso}
                                            onChange={dobleEnlace}
                                            required
                                        />
                                    </Form.Group>

                                    <div className="col-12 mt-3">
                                        <button className="btn btn-primary w-100" type="submit">Iniciar Sesion</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}