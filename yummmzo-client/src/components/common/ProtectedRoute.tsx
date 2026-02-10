import { useSelector } from "react-redux"
import type { RootState } from "@/store";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles }: { allowedRoles: string[] }) {
    // useSelector
    const { isAuthenticated , user } = useSelector((state: RootState) => state.auth);

    // Auth Checks
    if(!isAuthenticated){
        return <Navigate to="/" replace />;
    };

    if(user && !allowedRoles.includes(user.role)){
        return <Navigate to="/" replace />;
    };

    return <Outlet/>
};