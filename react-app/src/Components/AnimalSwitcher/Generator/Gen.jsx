import { React, useState } from "react";
// import axios from 'axios';
import "./Gen.css"

/*
    Generalized component to fetch an image and get it back.
    Expects props.url to be the api url,
    props.btnTxt to be the text for the button,
    and update to be a function that returns the url of the image
*/
function Gen(props) {
    const [current, set] = useState({});
    props = props.props;

    async function update(){
        set(await props.update(props.url))
    }



    return (
        <div id="dog-root">
            <button onClick={update}>
                {props.btnTxt}
            </button>
            <div id="dog-container">
                <img id="dog-image" src={current} alt="Click the button" />
            </div>

        </div>
    );
}

export default Gen