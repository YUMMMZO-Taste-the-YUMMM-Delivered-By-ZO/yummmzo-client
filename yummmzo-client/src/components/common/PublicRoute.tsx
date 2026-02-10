import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
    // useSelector
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    // Auth Checks
    if(isAuthenticated){
        return <Navigate to="/home" replace/>
    };

    return <Outlet/>;
};