"use client";
import React from "react";

const FirstSectionButton = (props: {
  class: string;
  href: string | undefined;
  text: string;
}) => {
  return (
    <>
      <a className={"btn from-left" + " " + props.class} href={props.href}>
        {props.text.toUpperCase()}
      </a>

      <style jsx>{`
        button{
	background-color: black;
	display: inline-block;
	font-weight: bold;
	font-size: 1.5rem;
	border-radius: 10px;
	border: none;
}
.btn {		
	z-index: 2;
	position: relative;	
	padding: 1.4rem;
	
	
	color: var(--primary-font-color);
	
	transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
	cursor: pointer;
	user-select: none;
	text-align: center;
}

.btn:before, .btn:after {
	content: '';
	position: absolute;	
	transition: inherit;
	z-index: -1;
}

.btn:hover {
	color: var(--def);
	
}

.btn:hover:before {
	
	transition-delay: 0s;
}

.btn:hover:after,
.btn:hover:before {
text-align: center;
display: flex;
flex-direction: row;
justify-content: center;
align-self: center;
align-items: center;
text-transform: capitalize;
font-size: 2em;



background: var(--secondary-font-color);
transition-delay: .35s;

}

.btn:hover:after .servicii{
	content: 'aflati mai multe';
	background: var(--secondary-font-color);
	transition-delay: .35s;
	
}



.from-top:before, 
.from-top:after {
	left: 0;
	height: 0;
	width: 100%;
}

.from-top:before {
	bottom: 0;	
	border: 1px solid var(--secondary-font-color);
	border-top: 0;
	border-bottom: 0;
}

.from-top:after {
	top: 0;
	height: 0;
}

.from-top:hover:before,
.from-top:hover:after {
	height: 100%;
}


.from-left:before, 
.from-left:after {
	top: 0;
	width: 0;
	height: 100%;
}

.from-left:before {
	right: 0;
	border: 1px solid var(--secondary-font-color);
	border-left: 0;
	border-right: 0;	
}

.from-left:after {
	left: 0;
}

.from-left:hover:before,
.from-left:hover:after {
	width: 100%;
}


.from-right:before, 
.from-right:after {
	top: 0;
	width: 0;
	height: 100%;
}

.from-right:before {
	left: 0;
	border: 1px solid var(--secondary-font-color);
	border-left: 0;
	border-right: 0;	
}

.from-right:after {
	right: 0;
}

.from-right:hover:before,
.from-right:hover:after {
	width: 100%;
}

/* From center */

.from-center:before {
	top: 0;
	left: 50%;
	height: 100%;
	width: 0;
	border: 3px solid var(--secondary-font-color);
	border-left: 0;
	border-right: 0;
}

.from-center:after {
	bottom: 0;
	left: 0;
	height: 0;
	width: 100%;
	background: var(--secondary-font-color);
}

.from-center:hover:before {
	left: 0;
	width: 100%;
}

.from-center:hover:after {
	top: 0;
	height: 100%;
}

/* From Bottom */

.from-bottom:before, 
.from-bottom:after {
	left: 0;
	height: 0;
	width: 100%;
}

.from-bottom:before {
	top: 0;	
	border: 3px solid var(--secondary-font-color);
	border-top: 0;
	border-bottom: 0;
}

.from-bottom:after {
	bottom: 0;
	height: 0;
}

.from-bottom:hover:before,
.from-bottom:hover:after {
	height: 100%;
	width: 100%;
}


.from-center:hover::before,
.from-center:hover::after{
	content: '';

}
.from-center:hover span{
display: hidden;
z-index: -9;
}

#whatsappimg{
height: auto;
width: 48px;

}

.whatsapp-cta div a {
	
	flex-flow: column nowrap;
	margin: auto;
}
.buttonTop{
	padding: 1em;
	transform-origin: center;
	border-radius: 35px;
	height: auto;
	max-height: 3rem;
	width: 3rem;
	background-color: rgba(0, 0, 0, 0.8);
	
  position: fixed;
  bottom: 10%;
  right: 0;
 
  
  z-index: 14;
  
}

.buttonTop:hover{background-color: rgba(0, 0, 0, 0.8);}
.buttonTop img{
	transition: transform;
	transition-duration: .5s;
	transform-origin: center;
	margin: auto;
}
.buttonTop:hover img{
	transform: scale(1.3);
}
}
             `}</style>
    </>
  );
};

export default FirstSectionButton;
