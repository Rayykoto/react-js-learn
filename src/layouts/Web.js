import React from "react";

import Header from "../components/web/Header";

const LayoutWeb = ({ children }) => {
    return (
        <React.Fragment>
            <Header/>

                {children}

        </React.Fragment>
    );
};

export default LayoutWeb;