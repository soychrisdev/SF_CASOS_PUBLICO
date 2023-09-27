import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormSectionComponent from "../component/FormSectionComponent";
import { useAuth } from "../hooks/query/useAuth";
import { useValidador } from "../hooks/query/useValidador";
import { useAppStore } from "../store/store";

const UsuarioNoValido = () => {
  return (
    <div className="card" id="rut">
      <div className="card-header">
        <h4 className="float-left heading h4-responsive mb-0">
          Problema encontrado!
        </h4>
      </div>
      <div>

        <h4>Usuario no valido, debes ingresar un usuario valido. Te estamos redireccionando al ingreso de usuarios. <Link to={'/'}>Volver</Link></h4>
      </div>
    </div>
  )

}


const SinAcceso = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore((state) => state)
  const handleBack = () => {
    setUserInfo({ ...userInfo, userIsValid: false })
    navigate('/')
  }
  return (
    <div>
      <h4 className="">El rut ingresado corresponde a un Alumno, favor ingrese a su plataforma correspondiente o intente con otro: <a onClick={handleBack}>Volver</a></h4>
    </div>
  )
}
export default function Consulta() {
  const { userInfo } = useAppStore((state) => state)
  const { data: url, isLoading: isLoadingAuth, status: statusAuth } = useAuth();
  const { postForm: postValidador, data: dataValidador, isLoading: isLoadingValidador, status } = useValidador();
  useEffect(() => {
    if (userInfo?.userIsValid !== false) {
      if (url?.instance_url !== undefined) {
        postValidador({
          validador: "contacto",
          rut: userInfo?.rut,
          instance_url: url?.instance_url,
          token: url?.access_token
        })
      }
    }
  }, [])


  if (isLoadingAuth || isLoadingValidador) return <div>loading...</div>
  if (dataValidador?.status === 200) return <SinAcceso />


  if (userInfo?.userIsValid === false || userInfo?.userIsValid === undefined) return <UsuarioNoValido />

  return (
    <div>
      <FormSectionComponent
        rut={userInfo?.rut}
        email={userInfo?.email}
        dataValidador={dataValidador}
        auth={url}
        isLoadingAuth={isLoadingAuth}
      />
    </div>
  )
}
