import { useMutation, useQueryClient } from "react-query";
import { ResponseError } from "../../utils/ResponseError";

//@ts-ignore
const postFormData = async (value) => {
    const toSendObject = {
        numero: value.numCaso,
        rut: value.rut,
        url: value.instance_url

    };

    const response = await fetch(
        //@ts-ignore
        `${config?.baseUrl}api/dataCasosByRutPublic`,
        {
            method: "POST",
            body: JSON.stringify(toSendObject),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${value.token}`,
            },
        },
    );




    if (!response.ok) {
        const error = await response.json().then((res) => res);
        throw new ResponseError(error, error);
        // Adjunta información extra al objeto de error.
    }

    const data = (await response.json().then((res) => res)) as [];
    return data;
};
export const useFormConsulta = () => {
    const queryClient = useQueryClient();
    const { mutate: postForm, error, isLoading, data, isSuccess, isIdle } = useMutation(postFormData, {
        onSuccess: async () => {
            //@ts-ignore
            toastr.success("Consulta realizada con éxito");
        },
        onError: (error) => {
            // If there was an error, revert the optimistic update
            //@ts-ignore
            toastr.error(JSON.stringify(error.response.Message));
        },
        onSettled: () => {
        },
    });

    return {
        postForm,
        error,
        isLoading,
        data,
        isSuccess,
        isIdle
    };
};