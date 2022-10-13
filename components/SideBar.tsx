import styles from "../styles/Sidebar.module.css";

const SideBar = () => {

    return (
        <div>
            <div className={styles.top_spacing}> 
                <p className={styles.arrow_button}> {'<'} </p>
            </div>
            
            <div className={styles.first_side_container}>
                <div className={styles.link_item}>
                    <div> Image </div>
                    <p> Dashboard </p>
                </div>
                <div className={styles.link_item}>
                    <div> Image </div>
                    <p> Stocks </p>
                </div>
                <div className={styles.link_item}>
                    <div> Image </div>
                    <p> Purchases </p>
                </div>
                <div className={styles.link_item}>
                    <div> Image</div>
                    <p> History </p>
                </div>
            </div>

            
            
        </div>
    )

}

export default SideBar