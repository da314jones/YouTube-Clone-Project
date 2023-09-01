// import { useLocation } from "react-router-dom";

export default function useSearchBarPosition() {
    const location = useLocation();

    if (location.pathname === "/") {
        return "footer";
    }
    return "header";
}