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
                   
                    <Image 
                    className="circle-icon"
                    src="/assets/images/icons/phone.svg" 
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    
                    />
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