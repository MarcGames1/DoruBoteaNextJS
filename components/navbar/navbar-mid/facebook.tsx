import * as React from 'react'

import Facebook from '@material-ui/icons/Facebook';
import styles from './Navbar.module.css';
const FacebookComponent = ()=>{
    return(
        <a className="text-decoration-none"  href="https://www.facebook.com/avocatdorubotea">
        <Facebook className={styles.icon} />
        </a>
)
}

       
            
        export default FacebookComponent
        