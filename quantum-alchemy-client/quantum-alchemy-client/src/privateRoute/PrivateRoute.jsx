import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="loading  loading-dots loading-lg "></div>
    }

    if (user) {
        return children;
    } 

    return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;