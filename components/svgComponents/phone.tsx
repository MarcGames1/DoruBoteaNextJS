
import React from "react";

const Phone = (props) => {

   function defaultColor() {
        let color = ''
        if(props.color==undefined){
            color = 'currentColor'
        }
        else color= props.color

        return color
    }

    return (
        <svg className="icon svg-inline--fa fa-envelope fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path fill={defaultColor()}
                        d="M30,320a15,15,0,0,1-14.62-11.63l-15-65a15,15,0,0,1,8.7-17.16l70-30a15,15,0,0,1,17.52,4.29l31,37.89A231.91,231.91,0,0,0,238.39,127.61l-37.89-31a15,15,0,0,1-4.29-17.52l30-70A15,15,0,0,1,243.37.39l65,15A15,15,0,0,1,320,30C320,190.29,190.05,320,30,320Z" />
                </g>
            </g>
        </svg>
    )
}

export default Phone

