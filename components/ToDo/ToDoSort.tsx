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

    const customStyles = {
        control: () => ({
            width: 100
        })
    }

    return (
        <div className={styles.sort_container}>
            
            <div className={styles.sort_wrapper}>
                <label> Sort </label>
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