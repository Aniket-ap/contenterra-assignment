import React, {useState, useEffect} from "react";
import "./MainSection.css"

const MainSection = (props) => {

    return (
        <div className="main-section">
            <header className="main-section-header">
                <h1 className="header-title">Challenge Title</h1>
                <hr/>
            </header>
            <section>
                {props.children}
            </section>
        </div>
    )
}

export default MainSection
