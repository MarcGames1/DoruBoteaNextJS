// import styles from'./footer.css'
const imglocation= '../../public/assets/images/icons/mail.png'

const Footer = () => {
    return (
        <>
 <style jsx>{`
     footer{
        z-index: 5;
        width: 100%;
      }
      .site-footer {
        /* margin-top: 100px; Remove */
          position: relative;
          background-color:#1A1F24;
          width: 100%;	
          bottom: 0; 
      }
      
      .site-footer .container {
          max-width: 85%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          padding-top: 20px;
      }
      
      .site-footer .container h1 {
          font-size: 40px;
      }
      
      .site-footer .container h2 {
          font-size: 40px;
          float: right;
      }
      
      .site-footer .grid-container a {
          color: var(--secondary-font-color);
          text-decoration: none;
          font-size: 15px;
          line-height: 16.25px;
      }
      
      .site-footer .grid-item {
          padding: 10px;
          color: var(--secondary-font-color);
      }
      
      
      .site-footer .grid-container .inner-grid-container {
          display: grid;
          grid-template-columns: auto auto auto auto;
          text-align: left;
      }
      
      .site-footer .container hr { 
          display: block; 
          height: 1px;
          border: 0; border-top: 1px solid var(--secondary-font-color);
          margin: 1px; 
          padding: 0; 
      }
      
      .site-footer .container p {
          font-size: 14px;
          text-align: right;
          color: var(--secondary-font-color);
          font-weight: 500;
      }
      
      .site-footer .container .logo-img {
          max-width: 130px;
          height: 140px;
          cursor: pointer;
      }
      
      .site-footer .grid-container .grid-item .sso {
          padding-top: 20px;
      }
      
      .site-footer .grid-container .grid-item .sso a {
          display: inline-flex;
          text-decoration: none;
          font-size: 30px;
          width: 60px;
          height: 60px;
          color: #1A1F24;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: 0 8px;
      }
      
      
      .site-footer .grid-container .grid-item .sso a img{
          transition: 0.3s ease-in;
      }
      
      .site-footer .grid-container .grid-item .sso a:hover img {
          background: linear-gradient(45deg,var(--secondary-font-color),var(--secondary-font-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: scale(1.5);
      }
      
      .circle-icon {
          background: var(--secondary-font-color);
          padding:12px;
          border-radius: 50%;
      }
      
      
      .grid-item .sso img{
        width: 100%;
        height: 100%;
      }
      /*------------------------------------------------------------------
      [ Screen Sizes] */
      
      
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
      
          .site-footer {
              height: 620px;
              bottom: 0; 
          }
      
          .site-footer .grid-container {
              display: grid;
              grid-template-columns: 400px;
          }
      
          .site-footer .grid-container .inner-grid-container {
              display: grid;
              grid-template-columns: auto auto ;
              text-align: left;
          }
      
      
      }
      
      /*========================================================*/
      
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
      
          .site-footer {
              height: 260px;
              bottom: 0;
          }
      
          .site-footer .grid-container {
              display: grid;
              grid-template-columns: 350px auto 350px;
          }
      
          .site-footer .grid-container .inner-grid-container{
              display: grid;
              grid-template-columns: auto auto auto auto;
              text-align: left;
          }
      
      }
    `}</style>
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

        <p>Copyright © 2021 |Marcu Alexandru </p>

    </div>
</footer>
        </>
    )
}

export default Footer