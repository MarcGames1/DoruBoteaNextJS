import React from 'react'

import servicii from './date/servicii.js';

import ServiciiCard from './serviciiCard'

import { useState } from "react";





 function ServiciiWrapper() {
    const [state, setState] = useState(servicii);
    return (
        <>
        <div className="container-fluid">

            <div className="row d-flex justify-content-around">
                {state.map(({ id, ...otherSectionProps }) => (
                    <ServiciiCard key={id} {...otherSectionProps} />
                    ))}
            </div>
        </div>
        </>
)
}


export default  ServiciiWrapper;