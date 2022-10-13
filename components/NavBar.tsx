import styles from "../styles/Navbar.module.css"


const NavBar = () => {

    return (
        <div className={styles.navbar_container}>
            
            <div className={styles.logo}> NAVBAR </div>
            
            <div className={styles.nav_items_container}>
                <div className={styles.nav_item}> <a href="#"> nav-item  </a> </div>
                <div className={styles.nav_item}> <a href="#"> nav-item  </a> </div>
                <div className={styles.nav_item}> <a href="#"> nav-item  </a> </div>
            </div>
            
        </div>
    )

}

export default NavBar