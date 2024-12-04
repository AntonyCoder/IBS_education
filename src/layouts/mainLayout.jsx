import React from "react";
import Header from "@header/header";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default MainLayout;