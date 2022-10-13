import Head from "next/head";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import styles from "../../styles/Layout.module.css";

export default function _Dashboard_Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>To-do List Kadince</title>
                <meta name="description" content="To-do list for Kadince" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className={styles.app_container}>
                
                <div className={styles.navbar_container}>
                    <SideBar/>
                </div>
                
            
                <div className={styles.content_container}>
                    <NavBar />
                    <main> { children } </main>
                </div>
            </div>
        </>
    )
}