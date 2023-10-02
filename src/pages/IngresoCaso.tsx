import { Link } from "react-router-dom";
import FormSectionComponent from "../component/FormSectionComponent";
import { useAuth } from "../hooks/query/useAuth";
import { useAppStore } from "../store/store";


export default function IngresoCaso() {
  const { userInfo } = useAppStore((state) => state)
  const { data: url, isLoading: isLoadingAuth } = useAuth();

  if (!userInfo?.userIsValid) return <Link to="/" reloadDocument>El rut ingresado no es valido para ingresar casos por este medio: Volver</Link>

  return (
    <div>
      <FormSectionComponent
        rut={userInfo?.rut}
        email={userInfo?.email}
        // dataValidador={dataValidador}
        auth={url}
        isLoadingAuth={isLoadingAuth}
      />
    </div>

  )
}
