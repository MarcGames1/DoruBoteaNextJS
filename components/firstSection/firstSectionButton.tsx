import React from "react";

const FirstSectionButton = ()=>{
    
    return(
        <>
        <a className="main-cta btn btn1 from-left" href="#servicii">vedeti mai multe</a>

        <style global jsx>{`
        letter-spacing: 1.1rem;
        z-index: 2;
        position: relative;
        padding: 1.4rem 1rem;
        color: var(--primary-font-color);
    
        transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
        cursor: pointer;
    
    user-select: none;
    text-align: center;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
   
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
             `}</style>
        </>
    )
}

export default FirstSectionButton