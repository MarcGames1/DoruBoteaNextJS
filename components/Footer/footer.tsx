// import styles from'./footer.css'


const Footer = () => {
    return (
        <>
 
<footer className="site-footer">
    <main className = "container">

        <main className="grid-container">
            <main className="grid-item">               
                <img src = "../../assets/images/logo.png" className = "logo-img"/>
            </main>


            <main className="grid-item inner-grid-container">
                
                <main className="grid-item"><a href="#servicii">Servicii</a></main>   
                <main className="grid-item"><a href="/consultanta-online">Consultanta Online</a></main>   
                <main className="grid-item"><a href="/contact">Contact</a></main>   
                <main className="grid-item"><a href="/blog">Blog</a></main>   
            </main>
            



            <main className="grid-item">
                <main className = "sso">
                    <a href= "tel:0744312302"><img src="../../assets/images/icons/phone.png" className="circle-icon"/></a>
                    <a href="https://wa.me/+40744312032"><img src="../../assets/images/icons/wa-mono.png" className="circle-icon"/></a>
                    <a href= "https://www.facebook.com/avocatdorubotea"><img src="../../assets/images/icons/f.png" className="circle-icon"/></a>
                    <a href= ""><img src="../../assets/images/icons/mail.png" className="circle-icon"/></a>
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