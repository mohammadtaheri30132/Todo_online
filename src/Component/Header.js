import React, {useContext} from "react";

function Header() {

    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex justify-content-center">
                       Todo App
                    </a>
                </div>
            </div>
        </header>
    )


}

export default Header