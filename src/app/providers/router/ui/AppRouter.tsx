import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { privateRouteConfig, publicRouteConfig } from "shared/routeConfig/routeConfig";
import { AuthPage } from "pages/AuthPage";
import { HomePage } from "pages/HomePage";
import { useAppSelector } from "app/redux/hooks/redux";
import { Sidebar } from "widgets/Sidebar";
import { Navbar } from "widgets/Navbar";

const AppRouter = () => {
    const {user} = useAppSelector(state => state.userReducer)
    
        // user == undefined
    return user == undefined ?  (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(publicRouteConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
                <Route path="*" element={<AuthPage/>}/>
            </Routes>
        </Suspense>
    ) : 
    (
        <Suspense fallback={<div>Loading...</div>}>
            {/* <Navigate to={'/home'}/> */}
            <div className="content-page">
                {/* <Navbar/> */}
                <Sidebar/>
                <Routes>
                {/* <Navbar/>  */}
                    {Object.values(privateRouteConfig).map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
            </div>
        </Suspense>
    )
    
}

export default AppRouter