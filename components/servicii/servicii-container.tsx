import Image from 'next/image'

import ServiciiWrapper from './servicii-wrapper'


const ServiciiContainer =() => {
    
    return(
    <>

<section id='Servicii' className="servicii-detalii">
        <main className="h-10 ">
        <Image className="section-img img-fluid" src="/assets/images/ServiciiBG.webp" alt='image' width={1920} height={773} loading='lazy' layout='intrinsic' objectFit='contain'/>
        </main>
        <main className="section-title"></main>
        <h2 className="h1 section-title">Servicii</h2>
        <main className="h1-separator">
                <Image src="/assets/images/decorative/h1-separator-custom-icon-1.png" alt="decorative Image"width={50} height={50} objectFit= "contain"/>
                
            </main>
<ServiciiWrapper />
<main className="h1-separator">
                <Image src="/assets/images/decorative/h1-separator-custom-icon-1.png" alt="decorative Image"width={50} height={50} objectFit= "contain"/>
                
            </main>
</section>
</>
    )
}


export default ServiciiContainer