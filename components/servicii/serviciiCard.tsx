import Image from 'next/image'

export default function ServiciiCard ({icon, name, description, route}) {
    
    return(
        <>
        <div className ="col-lg-3  col-md-6 col-sm-12 mb-3 servicii-container card transparent-card">
                <h3 className="section-head card-header">{name}</h3>
                <Image className=" align-self-center card-img-top" src={icon} alt="Icons Of Servici" width={50} height={10} layout="responsive" objectFit="contain" quality={100}/>
            
                <div className="content card-body" id={name}>
                   
                    <p className="paragraphs"> {description} </p>
                        <a className="btn btn1 from-left d-block" href={route}>cititi mai mult</a>
                </div>
            </div>
            </>
    )
    }