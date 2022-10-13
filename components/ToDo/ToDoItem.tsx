import React, { useState, useEffect} from "react";
import styles from "../../styles/ToDo.module.css";

interface input {
    task: string,
    status: string,
    index: number,
    deleteItem: (index: number) => void,
    editTaskStatus: boolean,
    toggleEditTask: (index: number) => void,
    editStatus: (index: number) => void,
    handleTaskEdit: (index:number, event:string) => void
}

const ToDoItem = ({
        task, 
        status, 
        index, 
        deleteItem, 
        editTaskStatus, 
        toggleEditTask, 
        editStatus,
        handleTaskEdit
    }: input ) => {

    const handleKeyPress = (event: any, index: number) => {
        if (event.key === "Enter") {
            toggleEditTask(index)
        }
    }

    return (   
        <div className={styles.item_container} key={index}>

            {
                editTaskStatus ? 
                    <p className={styles.task_text} onClick={() => toggleEditTask(index)}> {task} </p>:
                    <input 
                        className={styles.input_task_text} 
                        value={task}
                        onChange={(event) => handleTaskEdit(index, event.target.value)}
                        onKeyPress={(event) => handleKeyPress(event, index)}
                        autoFocus
                    />
            }
            
            <div className={styles.status_text} onClick={() => editStatus(index)}> {status} </div>
            <button className={styles.edit_button} onClick={() => toggleEditTask(index)}> </button>
            <button className={styles.delete_button} onClick={() => deleteItem(index)}> </button> 
        </div>
    )

}

export default ToDoItem;