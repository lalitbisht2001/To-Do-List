import styles from './Merge.module.css';
import ToLists from './ToLists'
import Progress from './Progress'
import Completed from './Completed'
import Overdue from './Overdue'

const Merge = () => {
    return (
        <div className={styles.main}>
            <ToLists />
            <Progress />
            <Completed />
            <Overdue />
        </div>
    )
}

export default Merge