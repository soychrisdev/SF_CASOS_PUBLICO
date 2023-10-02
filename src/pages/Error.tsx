import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { MESSAGES } from "../utils/types";

export default function Error() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>This page doesn't exist! <Link role="button" to={'/'} reloadDocument>
                Volver
            </Link></div>;
        }

        if (error.status === 401) {
            return <div>You aren't authorized to see this <Link role="button" to={'/'} reloadDocument>
                Volver
            </Link></div>;
        }

        if (error.status === 503) {
            return <div>Looks like our API is down <Link role="button" to={'/'} reloadDocument>
                Volver
            </Link></div>;
        }

        if (error.status === 418) {
            <Link role="button" to={'/'} reloadDocument>
                Volver
            </Link>
        }
    }

    return <div>{MESSAGES.ERROR_CARGAR_PAGINA}
        <Link role="button" to={'/'} reloadDocument>
            Volver
        </Link>
    </div>;
}