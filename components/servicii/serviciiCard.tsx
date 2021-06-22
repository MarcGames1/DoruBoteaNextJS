import Image from 'next/image'
import Button from '../Button'
export default function ServiciiCard ({icon, name, description, route, alt}) {
    
    return(
        <>
        <div className ="col-lg-3  col-md-6 col-sm-12 mb-3 servicii-container card transparent-card">
                <h3 className="section-head card-header">{name}</h3>
                <Image className=" align-self-center card-img-top" src={icon} alt={alt} width={50} height={10} layout="responsive" objectFit="contain" quality={100}/>
            
                <div className="content card-body" id={name}>
                   
                    <p className="paragraphs"> {description} </p>
                        <Button class="btn  from-left d-block" href={route} text = 'cititi mai mult' />
                </div>
            </div>
            </>
    )
    }