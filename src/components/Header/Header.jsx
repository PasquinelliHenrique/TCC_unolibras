import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';




function Header(){
  return(
    <div className={styles.header}>
    <Link to='/'><FaArrowLeft className={styles.icon_seta}/></Link>
    <div className={styles.line}></div>
    </div>
  )
}

export default Header