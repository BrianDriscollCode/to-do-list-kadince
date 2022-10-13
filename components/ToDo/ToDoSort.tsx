import styles from "../../styles/ToDo.module.css";
import Select from "react-select";

interface methodPassed {
    changeSort: (option: string) => void
}

const ToDoSort = ( { changeSort }: methodPassed ) => {

    const handleChange = (options: any) => {
        changeSort(options.value)
    }

    const options = [
        { value: '', label: 'All'},
        { value: 'pending', label: 'Pending'},
        { value: 'complete', label: 'Complete'}
    ]

    return (
        <div className={styles.sort_container}>
            
            <div className={styles.sort_wrapper}>
                <label className={styles.label}> Sort </label>
                <Select 
                
                    className={styles.select_input}
                    options={options} 
                    onChange={handleChange}
                />
            </div>
            
            
        </div>
    )

}

export default ToDoSort;