import React, { useEffect } from 'react';
import {
    Facebookpage
} from './common';

// import "./sass/PersonalDetails.scss";

function MainSections(props) {

    const clicked = (e) => {
        e.preventDefault();
    }

    useEffect(function () {
        return function cleanup() {
        }
    }, []);

    return (
        <>
            <Facebookpage />
        </>
    );
}

export default MainSections;


