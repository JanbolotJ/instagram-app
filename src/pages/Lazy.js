import React from "react";


export const Register = React.lazy(() => import("../apps/auth/register/Gptreg"));

export const Login = React.lazy(() => import("../apps/auth/login/Login"))

export const Main = React.lazy(() => import("../apps/layout/main/main"))


export const AuthPages = {
    Register,
    Login,
}
export const LayoutPages = {
    Main
}