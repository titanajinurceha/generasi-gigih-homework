import Landingpage from "./Landingpage";
import Search from "./Search/index.jsx";
import { useState } from "react";
import "./style.module.css";

const Index = () => {
    const [isLogin, setIsLogin] = useState({
        status: false, params:{}
    });
    const getAccessToken = (params) => {
        if (params?.access_token){
            setIsLogin({ status:true, params: params});
        }
    };

    return isLogin.status ? (
        <Search params={isLogin.params} />
    ) : (
        <Landingpage onLogin={getAccessToken} />
    )
};

export default Index;