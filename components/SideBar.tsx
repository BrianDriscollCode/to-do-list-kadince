import styles from "../styles/Sidebar.module.css";

const SideBar = () => {

    return (
        <div>
            <div className={styles.top_spacing}> 
                <h1 className={styles.header}> Kadince </h1>
            </div>
            
            <div className={styles.first_side_container}>
                <div className={styles.link_item}>
                    <img src="./see_icon.png" width="24" height="24"/>
                    <p> Dashboard </p>
                </div>
                <div className={styles.link_item} >
                    <img src="./pie_icon.png" width="24" height="24"/>
                    <p> Stocks </p>
                </div>
                <div className={styles.link_item}>
                    <img src="./chart_icon.png" width="24" height="24"/>
                    <p> Purchases </p>
                </div>
            </div>

            
            
        </div>
    )

}

export default SideBar