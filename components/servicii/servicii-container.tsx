import Image from 'next/image'
import ServiciiWrapper from './servicii-wrapper'


const ServiciiContainer =() => {
    
    return(
    <>

<section className="servicii-detalii">
        <div className="section-img"></div>
        <div className="section-title"></div>
        <h2>Servicii</h2>
        <div className="h1-separator">
                <Image src="/assets/images/decorative/h1-separator-custom-icon-1.png" alt="image"width={50} height={50}/>
                
            </div>
<ServiciiWrapper />
<div className="h1-separator">
                <Image src="/assets/images/decorative/h1-separator-custom-icon-1.png" alt="image"width={50} height={50}/>
                
            </div>
</section>
</>
    )
}


export default ServiciiContainer