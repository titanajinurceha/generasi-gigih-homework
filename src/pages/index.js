import Landingpage from "./Landingpage";
import Playlist from "../components/Playlist";
import { useState } from "react";

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
        <Playlist params={isLogin.params} />
    ) : (
        <Landingpage onLogin={getAccessToken} />
    )
};

export default Index;