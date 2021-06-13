import * as React from 'react'

import {Facebook} from '@material-ui/icons';
import styles from './Navbar.module.css';
const FacebookComponent = ()=>{
    return(
        <a className="d-flex flex-row text-decoration-none" href="mailto:avocat.dorubotea@gmail.com">

        <Facebook className={styles.icon} />
        <div className="white text-center">
            
        
        <p className="white text-align-center small ">Facebook</p>
        </div>
        </a>
        
    )
}

export default FacebookComponent