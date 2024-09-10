import NoteOutput from "../NoteOutput";
import styles from "./ToList.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const ToLists = () => {

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p >To do List</p>
                <NavLink to='/note' className={styles.icon_box} title="see all notes">
                    <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                </NavLink>
            </div>
            <NoteOutput />
        </div>
    );
};

export default ToLists;
