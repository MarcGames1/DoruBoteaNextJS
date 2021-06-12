// import styles from'./footer.css'


const Footer = () => {
    return (
        <>
 
<footer className="site-footer">
    <div className = "container">

        <div className="grid-container">
            <div className="grid-item">               
                <img src = "../../assets/images/logo.png" className = "logo-img"/>
            </div>


            <div className="grid-item inner-grid-container">
                
                <div className="grid-item"><a href="#servicii">Servicii</a></div>   
                <div className="grid-item"><a href="/consultanta-online">Consultanta Online</a></div>   
                <div className="grid-item"><a href="/contact">Contact</a></div>   
                <div className="grid-item"><a href="/blog">Blog</a></div>   
            </div>
            



            <div className="grid-item">
                <div className = "sso">
                    <a href= "tel:0744312302"><img src="../../assets/images/icons/phone.png" className="circle-icon"/></a>
                    <a href="https://wa.me/+40744312032"><img src="../../assets/images/icons/wa-mono.png" className="circle-icon"/></a>
                    <a href= "https://www.facebook.com/avocatdorubotea"><img src="../../assets/images/icons/f.png" className="circle-icon"/></a>
                    <a href= ""><img src="../../assets/images/icons/mail.png" className="circle-icon"/></a>
                </div>
            </div>   
        </div>
        <hr/>

        <p>Toate Drepturile sunt rezervate de Cabinet Avocat Doru Botea | site-ul a fost dezvoltat si optimizat SEO de Marcu Alexandru </p>

    </div>
</footer>
        </>
    )
}

export default Footer