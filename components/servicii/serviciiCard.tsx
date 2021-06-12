
import Image from 'next/image'
import Icon from './icon'
export default function ServiciiCard ({icon, name, description, route}) {
    // const [state, setState] = useState(servicii);
    return(
        <div className="servicii-container">
            
                <h2 className="section-head">{name}</h2>
                <div className="content" id={name}>
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
                </div>
            </div>
            
    )
    }