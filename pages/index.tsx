//Next & React Imports
import { ReactElement } from "react"

//Application File Imports
import styles from '../styles/Home.module.css'
import ToDoContainer from "../components/ToDo/ToDoContainer"
import { NextPageWithLayout } from "./_app"
import _Dashboard_Layout from '../components/Layouts/_Dashboard_Layout'


const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
        <ToDoContainer />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <_Dashboard_Layout>
      {page}
    </_Dashboard_Layout>
  )
}

export default Home
