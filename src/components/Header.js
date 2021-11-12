import React from 'react';

const Header = ({resetBtnClick}) => {

    const testfunc = ()  => {
        console.log("Clicked Help");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border border-primary">
            <a className="navbar-brand" href="#">Football App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                    <a className="nav-item nav-link active px-4" style={{color: 'darkred'}} onClick={() => {testfunc()}} href="#">Help <span className="sr-only">(current)</span></a>
                </div>
            <div className="navbar-nav">
                    <a className="nav-item nav-link active px-4" onClick={() => {resetBtnClick()}} href="#">Start Over<span className="sr-only">(current)</span></a>
                </div>
            </div>
        </nav>
    )
}

export default Header