import { React, useState } from "react";
import Dog from "./DogGen/Dog";
import Cat from "./CatGen/Cat";
import Gen from "./Generator/Gen";
import axios from 'axios'

function AnimalSwitcher() {


    const catProps = {
        url: "https://api.thecatapi.com/v1/images/search",
        btnTxt: "Get me a cat!",
        update: (url) => {
            return axios.get(url).then(
                (resp) => {
                    return resp.data[0].url
                }
            )
        }
    };
    const cat = <Gen props={catProps} />

    const dogProps = {
        url: "https://dog.ceo/api/breeds/image/random",
        btnTxt: "Get me a dog!",
        update: (url) => {
            return axios.get(url).then(
                (resp) => {
                    return resp.data.message
                }
            )
        }
    }
    const dog = <Gen props={dogProps} />

    const [curElem, setElem] = useState(dog);
    const [numstate, setNumState] = useState(0);

    function swap() {
        if (numstate === 0) {
            // setElem(<Cat/>);
            setElem(cat);
            setNumState(1);
        }
        else {
            // setElem(<Dog/>);
            setElem(dog);
            setNumState(0);
        }
    }

    return (
        <>
            <button onClick={swap}>Swtich</button>
            {curElem}
        </>
    );
}

export default AnimalSwitcher