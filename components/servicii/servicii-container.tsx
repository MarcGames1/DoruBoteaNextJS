import Image from 'next/image'
import ServiciiWrapper from './servicii-wrapper'


const ServiciiContainer =() => {
    
    return(
    <>

<section className="servicii-detalii">
        <main className="section-img"></main>
        <main className="section-title"></main>
        <h2>Servicii</h2>
        <main className="h1-separator">
                <Image src="/assets/images/decorative/h1-separator-custom-icon-1.png" alt="image"width={50} height={50} objectFit= "contain"/>
                
            </main>
<ServiciiWrapper />
<main className="h1-separator">
                <Image src="/assets/images/decorative/h1-separator-custom-icon-1.png" alt="image"width={50} height={50} objectFit= "contain"/>
                
            </main>
</section>
</>
    )
}


export default ServiciiContainer