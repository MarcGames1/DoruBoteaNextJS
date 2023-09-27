import Image from 'next/image'
import Button from '../Button'
import styles from './serviciiCard.module.css'
export default function ServiciiCard ({icon, name, description, route, alt}) {
    
    return (
      <>
        <div className="col-lg-3  col-md-6 col-sm-12 mb-3 servicii-container card transparent-card">
          <h5 className="section-head card-header">{name}</h5>
          <div className={styles.picContainer}>
            <Image
              className=" align-self-center card-img-top"
              src={icon}
              alt={alt}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>

          <div className={`content card-body ${styles.text}`} id={name}>
            <p className="paragraphs"> {description} </p>
            <Button
              class="btn  from-left d-block"
              href={route}
              text="cititi mai mult"
            />
          </div>
        </div>
      </>
    );
    }