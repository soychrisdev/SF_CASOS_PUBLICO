import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { useAuth } from "../hooks/query/useAuth";
import { useValidador } from "../hooks/query/useValidador";
import { useAppStore } from "../store/store";
import { formatRut, validateRut } from "../utils/RutValidator";

export default function Ingreso() {

    const { userInfo, setUserInfo, clearUserInfo } = useAppStore((state) => state);
    const { data: url } = useAuth();
    const { postForm: postValidador, data: dataValidador, status } = useValidador();
    const navigate = useNavigate();
    //@ts-ignore
    const handleValidateRut = (rut) => {
        const isValid = validateRut(rut);
        return isValid;
    };
    const validate = () => {
        let status = false;

        //validar nombre y apellido
        if (userInfo?.name === "") {
            //@ts-ignore
            return "Nombre y apellido invalido!"
        }
        //validar rut
        if (userInfo?.rut === "") {
            //@ts-ignore
            return "Rut invalido!"
        }
        //validar email
        if (userInfo?.email === "" || userInfo?.email === undefined) {
            return "Email invalido!"
        }

        if (!isEmail(userInfo?.email)) {
            return "Email invalido!"
        }

        if (!validateRut(userInfo?.rut)) {
            return "Rut invalido!"
        }

        if (userInfo?.phoneNumber === "" || userInfo?.phoneNumber === undefined || userInfo?.phoneNumber?.length < 9 && userInfo?.phoneNumber?.length > 0) {
            return "Numero de telefono invalido!"
        }
        status = true
        return status
    }

    const handleSubmit = () => {

        if (validate() == true) {

            setUserInfo({ ...userInfo, userIsValid: validate() == true ? true : false })


            postValidador({
                validador: "contacto",
                rut: userInfo?.rut,
                instance_url: url?.instance_url,
                token: url?.access_token
            })




        } else {
            //@ts-ignore
            toastr.error(validate());
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo, [name]: name === "rut" ? formatRut(value, false) : name === "email" ? isEmail(value) ? value : value : value
        });



    };

    useEffect(() => {
        if (dataValidador?.status === 400) {
            if (userInfo?.userIsValid !== false) {
                setUserInfo({ ...userInfo, userIsValid: true })
                setTimeout(() => {
                    navigate("/ingreso");
                }, 1000)
                console.log(JSON.stringify(userInfo))
                console.log(dataValidador?.status)
            } else {
                clearUserInfo();
            }

        }

        if (dataValidador?.status === 200) {
            //@ts-ignore
            toastr.error('El rut ingresado corresponde a un Alumno, favor ingrese por su plataforma.');
        }

    }, [status])





    return (
        <div>
            <div className="card" id="rut">
                <div className="card-header">
                    <h4 className="float-left heading h4-responsive mb-0">
                        Ingreso de datos
                    </h4>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-2 mt-3">
                        <div className="md-form my-3">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control mb-0"
                                placeholder="Ingrese nombre y apellido"
                                onChange={(e) => handleOnChange(e)}
                                value={(userInfo?.name)}
                            />

                            <label htmlFor="name" className="active">
                                Nombre y Apellido (*Ingrese nombre y apellido)
                            </label>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2 mt-3">
                        <div className="md-form my-3">
                            <input
                                type="text"
                                name="rut"
                                id="rut"
                                className="form-control mb-0"
                                placeholder="Ingrese RUT"
                                // onChange={handleChange}
                                onChange={(e) => handleOnChange(e)}
                                // onChange={(e) => setUserInfo({ ...userInfo, rut: formatRut(e.target.value, false) })}
                                value={
                                    userInfo?.rut === "-" ? "" : userInfo?.rut
                                }
                            />

                            <label htmlFor="campo_rut" className="active">
                                RUT (*Ingrese su RUT)
                            </label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mt-3">
                        <div className="md-form my-3">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="form-control mb-0"
                                placeholder="Ingrese su correo"
                                onChange={(e) => handleOnChange(e)}
                                // onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                value={userInfo?.email}
                            />

                            <label htmlFor="campo_email" className="active">
                                Email (*ejemplo@mail.com)
                            </label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mt-3">
                        <div className="md-form my-3">
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="form-control mb-0"
                                placeholder="Ingrese numero de telefono"
                                onChange={(e) => handleOnChange(e)}
                                value={userInfo?.phoneNumber}
                            />

                            <label htmlFor="name" className="active">
                                Ingrese numero de telefono (*Ingrese numero de telefono)
                            </label>
                        </div>
                    </div>

                </div>


                <div className="row mt-2">
                    <div className="col-12 mb-4 d-flex align-items-center justify-content-end">
                        <button
                            id="btnFormulario"
                            type="button"
                            className="btn btn-default ml-0"
                            onClick={handleSubmit}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
