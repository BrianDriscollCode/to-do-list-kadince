//Framework Imports
import { useState, useEffect } from "react";

//Application Imports
import ToDoItem from "./ToDoItem";
import ToDoSort from "./ToDoSort";
import styles from "../../styles/ToDo.module.css";

const ToDoContainer = () => {

    const [input, setInput] = useState("")
    const [listItems, setListItems] = useState([
        {id: 1, task: 'TaskName', status: 'pending', editTaskStatus: true},
        {id: 2, task: 'TaskName2', status: 'pending', editTaskStatus: true}
    ]);
    const [sortSetting, setSortSetting] = useState('pending');

    const addItem = () => {
        console.log('test')
        let tempList = listItems;
        let length = tempList.length;

        if (length < 8) {
            tempList[length] = {
                id: length + 1, task: input, status: "pending", editTaskStatus: true
            }
        }
        setListItems([...tempList])
    }

    const deleteItem = (index: number) => {

        let tempList = listItems;
        tempList.splice(index, 1)

        setListItems([...tempList])
    }

    const toggleEditTask = (index: number) => {
        let tempList = listItems;
        tempList[index].editTaskStatus = !tempList[index].editTaskStatus

        setListItems([...tempList])
    }

    const handleTaskEdit = (index: number, event: string ) => {
        let tempList = listItems;
        tempList[index].task = event

        setListItems([...tempList])

    }

    const editStatus = (index: number) => {
        let tempList = listItems;
        console.log(tempList[index])
        if (tempList[index].status === "pending") {
            tempList[index].status = "complete"
        }
        setListItems([...tempList])
    }

    const changeSort = (option: string) => {
        setSortSetting(option)
    }

    const listHelper = listItems.map((item, index) => 
                        <ToDoItem 
                            index={index}  
                            task={item.task} 
                            status={item.status}
                            deleteItem={deleteItem}
                            editTaskStatus={item.editTaskStatus}
                            toggleEditTask={toggleEditTask}
                            editStatus={editStatus}
                            handleTaskEdit={handleTaskEdit}
                        />
                        )

    console.log(listHelper)

    return (
        <div className={styles.todo_container}> 
            <div className={styles.todo_header}>
                <h2> Task Master 2000 </h2>
            </div>

            {/** Input */}
            <div className={styles.input_container}>
                <div className={styles.input_wrapper}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={addItem}> + </button>
                </div>
            </div>

            {/** Sorting component */}
            <ToDoSort 
                changeSort={changeSort}
            />
           
           {/** Header for Tasks */}
            <div className={styles.item_headers}>
                <p className={styles.task_header}> Task Name</p>
                <p className={styles.task_status}> Status </p>
                <p className={styles.task_edit}> Edit </p>
                <p className={styles.task_delete}> Delete </p>
            </div>

            {/** To-do Items in container */}
            <div className={styles.items_parent_container}>
                
                {

                    // listItems.filter(item => item.status.includes(sortSetting))
                    //     .map((item, index) => 
                    //     <ToDoItem 
                    //         index={index} 
                    //         task={item.task} 
                    //         status={item.status}
                    //         deleteItem={deleteItem}
                    //         editTaskStatus={item.editTaskStatus}
                    //         toggleEditTask={toggleEditTask}
                    //         editStatus={editStatus}
                    //         handleTaskEdit={handleTaskEdit}
                    //     />
                    // )
                    listHelper

                   
                }

            </div>
            

        </div>
    )

}

export default ToDoContainer