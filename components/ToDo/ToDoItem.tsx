import React, { useState, useEffect} from "react";
import styles from "../../styles/ToDo.module.css";

interface input {
    keyID: string,
    task: string,
    status: string,
    index: number,
    deleteItem: (keyID: string) => void,
    editTaskStatus: boolean,
    toggleEditTask: (keyID: string) => void,
    editStatus: (keyID: string) => void,
    handleTaskEdit: (keyID: string, event:string) => void
}

const ToDoItem = ({
        keyID,
        task, 
        status, 
        index, 
        deleteItem, 
        editTaskStatus, 
        toggleEditTask, 
        editStatus,
        handleTaskEdit
    }: input ) => {

    const handleKeyPress = (event: any, keyID: string) => {
        if (event.key === "Enter") {
            toggleEditTask(keyID)
        }
        console.log("key press", event.key)
    }

    return (   
        <div className={styles.item_container}>

            {
                editTaskStatus ? 
                    <p className={styles.task_text} onClick={() => toggleEditTask(keyID)}> {task} </p>:
                    <input 
                        className={styles.input_task_text} 
                        value={task}
                        onChange={(event) => handleTaskEdit(keyID, event.target.value)}
                        onKeyPress={(event) => handleKeyPress(event, keyID)}
                        autoFocus
                    />
            }
            
            <div className={styles.status_text} onClick={() => editStatus(keyID)}> {status} </div>
            <button className={styles.edit_button} onClick={() => toggleEditTask(keyID)}> </button>
            <button className={styles.delete_button} onClick={() => deleteItem(keyID)}> </button> 
        </div>
    )

}

export default ToDoItem;