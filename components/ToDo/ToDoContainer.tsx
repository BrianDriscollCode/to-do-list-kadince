//Framework Imports
import { useState, useEffect } from "react";
import uuid from "react-uuid";

//Application Imports
import ToDoItem from "./ToDoItem";
import ToDoSort from "./ToDoSort";
import styles from "../../styles/ToDo.module.css";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";


const ToDoContainer = () => {

    const [input, setInput] = useState("")
    const [listItems, setListItems] = useState([
        {id: 1, task: 'TaskName', status: 'pending', editTaskStatus: true, keyID: '2104-035b-36e5-3eb-07cdda87fc3b'},
        {id: 2, task: 'TaskName2', status: 'pending', editTaskStatus: true, keyID: '2f0f-38e3-c8e-8bcf-0bfa11b8feee'}
    ]);
    const [sortSetting, setSortSetting] = useState('pending');

    const addItem = () => {
        console.log('test')
        let tempList = listItems;
        let length = tempList.length;

        if (length < 8) {
            tempList[length] = {
                id: length + 1, task: input, status: "pending", editTaskStatus: true, keyID: uuid()
            }
        }
        setListItems([...tempList])
    }

    const deleteItem = (keyID: string) => {
        let tempList = listItems.filter(item => item.keyID !== keyID)
        setListItems([...tempList])
    }

    const toggleEditTask = (keyID: string) => {
    
        let tempList = listItems.map(item => {
            if (item.keyID === keyID) {
                return {...item, editTaskStatus: !item.editTaskStatus}
            } else {
                return {...item}
            }
        })
        setListItems([...tempList])
    }

    const handleTaskEdit = (keyID: string, event: string ) => {
        // let tempList = listItems;
        // tempList[index].task = event

        // setListItems([...tempList])
        let tempList = listItems.map(item => {
            if (item.keyID === keyID) {
                return {...item, task: event}
            } else {
                return {...item}
            }
        })

        setListItems([...tempList])
    }

    const editStatus = (keyID: string) => {
        let tempList = listItems.map(item => {
            if (item.keyID === keyID) {
                return {...item, status: item.status === 'pending' ? 'complete': 'pending'}
            } else {
                return {...item}
            }
        })

        setListItems([...tempList])
    }

    const changeSort = (option: string) => {
        setSortSetting(option)
    }

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

                    listItems.filter(item => item.status.includes(sortSetting))
                        .map((item, index) => 
                        <ToDoItem 
                            keyID={item.keyID}
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

                   
                }

            </div>
            

        </div>
    )

}

export default ToDoContainer