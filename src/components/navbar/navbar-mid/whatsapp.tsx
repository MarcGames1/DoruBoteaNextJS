import React from 'react'
import Whatsapp from '../../svgComponents/whatsapp'


const WhatsappComponent = ()=>{
    return(
        <>
        <style global jsx>{` `}</style>
        <a className="d-flex flex-row text-decoration-none"  href="https://wa.me/+40744312032">

        <Whatsapp  />
        <div className="white text-center">
        </div>
        </a>
        </>
    )
}

export default WhatsappComponent