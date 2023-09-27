import DataTableComponent from "../component/TablaResultados";
import { useAuth } from "../hooks/query/useAuth";
import { useFormConsulta } from "../hooks/query/useSendConsulta";
import { useAppStore } from "../store/store";

export default function Resultados() {


  const { userInfo } = useAppStore((state) => state);

  const { data: token, isLoading: isLoadingAuth } = useAuth(true);
  const { postForm, error, isLoading, data, isSuccess, isIdle } = useFormConsulta();

  const { setCasosInfo, casosInfo } = useAppStore((state) => state)
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCasosInfo({
      ...casosInfo, [name]: value
    });
  };


  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();


    const sendValues = {
      rut: casosInfo?.rut,
      numCaso: casosInfo?.numCaso,
      instance_url: token?.instance_url,
      token: token?.access_token
    };
    postForm(sendValues);

  }

  return (
    <div>
      <div className="card" id="consulta_resultados">
        <div className="card-header">
          <h4 className="float-left heading h4-responsive mb-0">
            Consulta de Casos
          </h4>
        </div>

        <div className="row">
          <div className="col-md-4 mb-2 mt-3">
            <div className="md-form my-3">
              <input
                type="text"
                name="numCaso"
                id="numCaso"
                className="form-control mb-0"
                placeholder="Ingrese numero de caso"
                onChange={(e) => handleOnChange(e)}
                value={casosInfo?.numCaso}
              />

              <label htmlFor="name" className="active">
                Numero de caso (*)
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
                placeholder="Ingrese su Rut"
                onChange={(e) => handleOnChange(e)}
                value={casosInfo?.rut}
              />

              <label htmlFor="name" className="active">
                Ingrese su Rut (*)
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
              onClick={(e) => handleSubmit(e)}
            >
              Consultar
            </button>
          </div>
        </div>
      </div>

      {isIdle ||

        <div className="card mt-4" id="consulta_resultados">
          {
            !isLoading ? <DataTableComponent data={data} /> : 'loading...'
          }
        </div>
      }






    </div>
  )
}
