import Image from "next/image";


function Icon (icon){
    return(
        <>

        <Image className="image" src={icon} alt="IMAGE" layout="responsive" />
        </>
    )
}

export default Icon