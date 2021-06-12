import React from 'react'

import servicii from './date/servicii.js';

import ServiciiCard from './serviciiCard'

import  { useState } from "react";





export default function ServiciiWrapper(){
    const [state, setState] = useState(servicii);

return(
    <main className="servicii-wrapper">
    
    {state.map(({ id, ...otherSectionProps }) => (
        <ServiciiCard key={id} {...otherSectionProps} />
        ))}
    </main>
)
}

            
        
    