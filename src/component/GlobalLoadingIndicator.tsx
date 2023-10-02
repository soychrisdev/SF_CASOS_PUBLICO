import { useIsFetching } from "react-query"
import LoadingOverlayComponent from "./LoadingOverlay"

export default function GlobalLoadingIndicator() {
    const isFetching = useIsFetching()

    return isFetching ? (
        <LoadingOverlayComponent />
    ) : null
}