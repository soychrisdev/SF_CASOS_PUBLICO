import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { MESSAGES } from "../utils/types";

export default function Error() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div>This page doesn't exist! <Link to={'/'} replace > Volver </Link></div>;
        }

        if (error.status === 401) {
            return <div>You aren't authorized to see this <Link to={'/'} replace > Volver </Link></div>;
        }

        if (error.status === 503) {
            return <div>Looks like our API is down <Link to={'/'} replace > Volver </Link></div>;
        }

        if (error.status === 418) {
            return <div><Link to={'/'} replace > Volver </Link></div>;
        }
    }

    return <div>{MESSAGES.ERROR_CARGAR_PAGINA}
        <Link to={'/'} replace > Volver </Link>
    </div>;
}