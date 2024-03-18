import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <main className="container">
          <main className="grid-container">
            <main className="grid-item">
              <div className="grid-item logo-img">
                <Image
                  src="/assets/images/logo.webp"
                  alt="logo"
                  layout="responsive"
                  width={111}
                  height={140}
                  objectFit="contain"
                  // objectPosition="left"
                />
              </div>
            </main>

            <main className="grid-item grid justify-content-center inner-grid-container">
              <main className="grid-item">
                <Link href="/">Acasa</Link>
              </main>
              <main className="grid-item">
                <Link href="/avocat-online">Avocat Online</Link>
              </main>
              <main className="grid-item">
                <Link href="/contact">Contact</Link>
              </main>
            </main>

            <main className="grid-item">
              <main className="sso flex align-items-center ">
                <a href="tel:0744312032">
                  {/* 0744312032 */}
                  <BsFillTelephoneFill
                    color={"white"}
                    size={"2em"}
                    className={"circle-icon svg-inline--fa"}
                  />
                </a>

                <a href="https://wa.me/+40744312032">
                  <FaWhatsapp
                    className={"circle-icon svg-inline--fa"}
                    color={"white"}
                    size={"2em"}
                  />
                </a>
                <a href="https://www.facebook.com/avocatdorubotea">
                  <FaFacebook
                    className="circle-icon svg-inline--fa"
                    color={"white"}
                    size={"2em"}
                  />
                </a>
                <a href="mailto:avocat.dorubotea@gmail.com">
                  <IoIosMail
                    className={"circle-icon svg-inline--fa"}
                    size={"2em"}
                    color={"white"}
                  />
                </a>
              </main>
            </main>
          </main>
          <hr />

          <p>
            Toate Drepturile sunt rezervate de Cabinet Avocat Doru Botea |
            site-ul a fost dezvoltat si optimizat SEO de{" "}
            <a
              className="link-secondary primary-color "
              href="https://marweb.ro/"
              rel="nofollow"
            >
              Marcu Alexandru
            </a>{" "}
          </p>
        </main>
      </footer>
    </>
  );
};

export default Footer;
