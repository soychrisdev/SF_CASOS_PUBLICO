import { Link, useNavigate } from "react-router-dom";

export default function PopupAlumno() {
    const navigate = useNavigate();
    return (
        <div className="card" id="rut" style={{ display: "block" }}>
            <div className="card-header">
                <h4 className="float-left heading h4-responsive mb-0">
                    Importante
                </h4>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-md-12 mb-2 mt-3">
                        <div className="md-form my-3">
                            <p>Estimado el rut ingresado corresponde a un Alumno, por motivos de seguridad debe ingresar desde el <a className="text-decoration-underline" href="https://portales.inacap.cl/">portal de Alumno.</a>  </p>
                            <p>O ingrese los datos: <Link to={'/'}>Volver al ingreso de datos</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
