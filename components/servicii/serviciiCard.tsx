
import Image from 'next/image'

export default function ServiciiCard ({icon, name, description, route}) {
    
    return(
        <main className="servicii-container">
            
                <h2 className="section-head">{name}</h2>
                <main className="content" id={name}>
                    <style jsx>{`
            .servicii-container .image{
            max-width: 30%;
            height: 30%;
            min-width: auto;
            margin: 0 auto;
}
                `}
                    </style>
                <Image className="image" src={icon} alt="IMAGE" width={1} height={0.5} layout="responsive" />
                    <p className="paragraphs"> {description} </p>
                        <a className="btn from-left" href={route}>cititi mai mult</a>
                </main>
            </main>
            
    )
    }