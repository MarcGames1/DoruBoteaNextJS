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
                       

                    <svg className="circle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path fill="white"
                                d="M30,320a15,15,0,0,1-14.62-11.63l-15-65a15,15,0,0,1,8.7-17.16l70-30a15,15,0,0,1,17.52,4.29l31,37.89A231.91,231.91,0,0,0,238.39,127.61l-37.89-31a15,15,0,0,1-4.29-17.52l30-70A15,15,0,0,1,243.37.39l65,15A15,15,0,0,1,320,30C320,190.29,190.05,320,30,320Z" />
                        </g>
                    </g>
                </svg>
                    </a>
                
                    
                    
                    

                    
                    
                    <a href="https://wa.me/+40744312032">
                    <svg  aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp"
                            className="circle-icon svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="white"
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                            </path>
                        </svg>
                       </a>
                    <a href= "https://www.facebook.com/avocatdorubotea">
                    <svg  aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook"
                className="circle-icon svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="white"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                </path>
            </svg>
                    </a>
                    <a href= "mailto:avocat.dorubotea@gmail.com">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope"
                    className="circle-icon svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="white"
                        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z">
                    </path>
                </svg>
                    </a>
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