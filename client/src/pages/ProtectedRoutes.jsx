import { Navigate, Outlet } from "react-router-native";
import {useAuth} from '../context/AuthContext'
import { View } from "react-native";
import StyledText from "../components/styledComponents/StyledText";

function ProtectedRoutes (){
    const {loading, isAuthenticated} = useAuth()

    if(loading) return <View>
        <StyledText>Loading...</StyledText>
    </View>

    if(!loading && !isAuthenticated) return <Navigate to="/signin" replace/>
    
    return <Outlet/>

}

export default ProtectedRoutes