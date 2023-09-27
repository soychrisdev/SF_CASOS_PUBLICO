import { useMutation } from "react-query";

//@ts-ignore
const postValidadorData = async (value) => {
    const toSendObject = {
        validador: value.validador,
        rut: value.rut,
        instance_url: value.instance_url

    };

    const response = await fetch(
        //@ts-ignore
        `${config?.baseUrl}api/validadorRut`,
        {
            method: "POST",
            body: JSON.stringify(toSendObject),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${value.token}`,
            },
        },
    );

    const data = await response.json().then((res) => res) as [];
    return { status: response.status, data };
};
export const useValidador = () => {
    const { mutate: postForm, error, isLoading, data, isSuccess, isIdle, status, isError } = useMutation(postValidadorData, {

        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    });

    return {
        postForm,
        error,
        isLoading,
        data,
        isSuccess,
        isIdle,
        status,
        isError
    };
};