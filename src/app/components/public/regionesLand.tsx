import { useEffect, useState } from "react";


export const RegionesLand = () => {


    return(
      <>
       <div>
            <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label form="validationCustom01" className="form-label">Primer Nombre</label>
    <input type="text" className="form-control" id="validationCustom01" value="Pilar" required/>
    <div className="valid-feedback">
      Perfecto
    </div>
  </div>
  <div className="col-md-4">
    <label form="validationCustom02" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="validationCustom02" value="Guzman" required/>
    <div className="valid-feedback">
      Perfecto
    </div>
  </div>
  <div className="col-md-3">
    <label form="validationCustomUsername" className="form-label">Nombre de usuario</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
       Porfavor digite su nombre de usuario
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label form="validationCustom03" className="form-label">Ciudad</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Porfavor ingrese una ciudad
    </div>
  </div>
  <div className="col-md-3">
    <label form="validationCustom04" className="form-label">Documento de identidad</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Seleccione</option>
      <option>Cedula de ciudadania
      </option>
      <option>Tarjeta
      </option>
      <option>Cedula Extranjera
      </option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" form="invalidCheck">
        Acepta terminos y Condiciones
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary center" type="submit">Listo</button>
  </div>
</form>
        </div>
      </>
    );
}