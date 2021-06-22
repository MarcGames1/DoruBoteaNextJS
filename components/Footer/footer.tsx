import * as React from 'react'
import Image from 'next/image'


const Footer = () => {
    const iconSize = 1000
    return (
        <>
<footer className="site-footer">
    <main className = "container">

        <main className="grid-container">
            <main className="grid-item">    
            <div className="grid-item logo-img">

                <Image 
                    
                    src = "/assets/images/logo.webp" 
                    alt= "logo"
                    layout="responsive"
                    width={111}
                    height={140}
                    objectFit="contain"
                    // objectPosition="left"
                  
                    />
                    </div>
                             
            </main>


            <main className="grid-item inner-grid-container">
                
                <main className="grid-item"><a href="#servicii">Servicii</a></main>   
                <main className="grid-item"><a href="/consultanta-online">Consultanta Online</a></main>   
                <main className="grid-item"><a href="/contact">Contact</a></main>   
                <main className="grid-item"><a href="/blog">Blog</a></main>   
            </main>
            



            <main className="grid-item">
                <main className = "sso">
                    
                    <a href= "tel:0744312302">
                        <div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path fill="white"
                                d="M30,320a15,15,0,0,1-14.62-11.63l-15-65a15,15,0,0,1,8.7-17.16l70-30a15,15,0,0,1,17.52,4.29l31,37.89A231.91,231.91,0,0,0,238.39,127.61l-37.89-31a15,15,0,0,1-4.29-17.52l30-70A15,15,0,0,1,243.37.39l65,15A15,15,0,0,1,320,30C320,190.29,190.05,320,30,320Z" />
                        </g>
                    </g>
                </svg>
                                </div>
                    {/* <Image 
                    className="circle-icon"
                    src="/assets/images/icons/phone.svg" 
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    /> */}
                    
                    </a>
                    
                    

                    
                    
                    <a href="https://wa.me/+40744312032">
                        <Image 
                    className="circle-icon"
                    src="/assets/images/icons/w.svg" 
                    layout="fill"
                    quality={100}
                  
                    objectFit="contain"
                    /></a>
                    <a href= "https://www.facebook.com/avocatdorubotea"><Image 
                    className="circle-icon"
                    src="/assets/images/icons/f.svg"
                    layout="fill"
                   
                    objectFit="contain" 
                    /></a>
                    <a href= ""><Image 
                    className="circle-icon"
                    src="/assets/images/icons/mail.svg" 
                    layout="fill"
                 
                    objectFit="contain"
                    /></a>
                </main>
            </main>   
        </main>
        <hr/>

        <p>Toate Drepturile sunt rezervate de Cabinet Avocat Doru Botea | site-ul a fost dezvoltat si optimizat SEO de Marcu Alexandru </p>

    </main>
</footer>



        </>
    )
}

export default Footer