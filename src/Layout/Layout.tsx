import React from "react";
import TopBar from "./TopBar";

const Layout: React.FC = ({children}) => {
    return (
            <main>
                <TopBar />
                {children}
            </main>

    )
};
export default Layout;
