import Landingpage from "./Landingpage";
import CreatePlaylist from "./CreatePlaylist";
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
        <CreatePlaylist params={isLogin.params} />
    ) : (
        <Landingpage onLogin={getAccessToken} />
    )
};

export default Index;